import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";

const Favourites = () => {
  const Data = useSelector(state => state.preferences.preferences);

  return (
    <Container className="text-center">
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourites</h1>
          {Data.map(elem => (
            <Job key={elem._id} data={elem} />
          ))}
        </Col>
      </Row>
      <Link to="/">
        <Button className="btn btn-primary">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default Favourites;
