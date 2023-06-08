import React from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";

function AboutUsCard(props) {
  const aMember = props.member;

  return (
    <Col lg={3} md={3} sm={6} key={aMember.id}>
      <Card className="m-3 shadow">
        <div className="card">
          <img
            src={aMember?.memberImage}
            className="card-img-top"
            alt={aMember.name}
          />
          <div className="card-body">
            <h5 className="card-title">{aMember.name}</h5>
            <p className="card-text">{aMember.team}</p>
            <p className="card-text">{aMember.description}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
}
export default AboutUsCard;

AboutUsCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    memberImage: PropTypes.string.isRequired,
  }),
};
