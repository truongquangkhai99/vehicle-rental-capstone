import { formatMoneyK } from "lib/Helper";
import React from "react";
import { Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StarRatings from "react-star-ratings";

const ItemFind = (props) => {
  const data = props.data;
  const vehicle = data.vehicle;
  const type = props.type;
  const url = type === "bike" ? "/bike" : type === "car" ? "car" : "withdriver";
  const rates = vehicle.rating || [];
  const totalRate = rates.reduce((ini, item) => {
    return ini + item.numStar;
  }, 0);
  let numRate = 0;
  if (rates.length) {
    numRate = totalRate / rates.length;
  }
  return (
    <>
      <Col className="item" lg={6}>
        <Link to={url + `?id=${vehicle.id}`}>
          <div className="item__img">
            <div className="item__img-main">
              <img src={vehicle.mainImg} alt=""></img>
            </div>
            <div className="item__img-infor">
              {vehicle.driver ? (
                <div className="item__img-infor-price">
                  {formatMoneyK(Math.round(4*vehicle.originPrice/6000)*1000)}
                </div>
              ) : (
                <div className="item__img-infor-price">
                  {formatMoneyK(vehicle.originPrice)}
                </div>
              )}
            </div>
          </div>
          <div className="item__decs">
            <h2>{vehicle.model.name}</h2>
            <div className="item__decs--rating">
              <div className="d-inline-block">
                <StarRatings
                  rating={numRate}
                  starRatedColor="#008248"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="1px"
                />
              </div>
              <span> • {vehicle.numBooking} chuyến</span>
              <span> ∼ {data.dis}</span>
            </div>
            <div className="item__decs--auto">
              {type === "bike" ? (
                <span>{vehicle.bikeType}</span>
              ) : (
                <span>{vehicle.transmission}</span>
              )}
            </div>
            {vehicle.deliveryEnable ? (
              <div className="item__decs--auto">
                <span>Giao xe tận nơi</span>
              </div>
            ) : null}
            <div className="item__decs-local mt-2">
              <div className="item__decs-local-icon">
                <GrLocation />
              </div>
              <span>{data.des}</span>
            </div>
          </div>
        </Link>
      </Col>
    </>
  );
};
export default React.memo(ItemFind);
