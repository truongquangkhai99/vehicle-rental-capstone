import { formatDateTime } from "lib/Helper";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import StarRatings from "react-star-ratings";

export default function ItemReport(props) {
  const rate = props.rate;
  return (
    <>
      <div className="item-report">
        <Row>
          <Col lg={3}>
            <div className="avatar-user">
              <a href="">
                <img src={rate.reviewer.avatarLink} alt="" />
              </a>
            </div>
          </Col>
          <Col lg={9}>
            <a href="" className="name-user">
              {rate.reviewer.fullName}
            </a>
            <br />
            <span className="report-user">
              <span className="star-ratings">
                <StarRatings
                  rating={
                    rate.numStar
                  }
                  starRatedColor="#008248"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="1px"
                />
              </span>
              <span className="time-report">{formatDateTime(new Date(rate.createTime),true)}</span>
            </span>
            <p className="content">{rate.content}</p>
            <span className="status-user">{rate.type}</span>
          </Col>
        </Row>
      </div>
    </>
  );
}
