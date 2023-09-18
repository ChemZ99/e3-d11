import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobs } from "../redux/actions";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.companyjobs);
  const params = useParams();

  useEffect(() => {
    dispatch(getCompanyJobs(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const getcompanyJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <Container className="text-center">
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Link to="/Favourites">
        <Button className="btn btn-primary">Go to Favourites</Button>
      </Link>
    </Container>
  );
};

export default CompanySearchResults;
