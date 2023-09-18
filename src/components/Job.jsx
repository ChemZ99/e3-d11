import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as icons from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_PREFERENCES, REMOVE_FROM_PREFERENCES } from "../redux/actions";

const Job = ({ data }) => {
  const Dispatch = useDispatch();
  const preferences = useSelector(state => state.preferences.preferences);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <button
          className="btn"
          onClick={() => {
            preferences.findIndex(elem => elem._id === data._id) !== -1
              ? Dispatch({ type: REMOVE_FROM_PREFERENCES, payload: data })
              : Dispatch({ type: ADD_TO_PREFERENCES, payload: data });
          }}
        >
          {preferences.findIndex(elem => elem._id === data._id) !== -1 ? (
            <icons.HeartFill color="red" />
          ) : (
            <icons.Heart color="red" />
          )}
        </button>
      </Col>
    </Row>
  );
};

export default Job;
