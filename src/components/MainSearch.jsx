import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobs);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchJobs(inputValue));
  };

  return (
    <Container className="text-center">
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
              }}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
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

export default MainSearch;
