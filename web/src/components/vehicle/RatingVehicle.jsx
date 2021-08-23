import React from "react";
import StarRatings from "react-star-ratings";
import ItemReport from "./ItemReport";

function RatingVehicle(props) {
  const vehicle = props.vehicle;
  const rating = vehicle.rating || [];
  const numRate = rating.length
    ? rating.reduce((ini, item) => {
        return ini + item.numStar;
      }, 0) / vehicle.rating.length
    : 0;
  return (
    <div className="review">
      <div className="review-heading">
        <h3>ĐÁNH GIÁ</h3>
        <div className="status-vehicle">
          <span className="star-ratings">
            <StarRatings
              rating={numRate}
              starRatedColor="#008248"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
            />
          </span>
          <span>---------</span>
          <span className="number-report">{rating.length} đánh giá</span>
        </div>
      </div>
      <div className="review-content">
        {rating.map((item, index) => {
          return <ItemReport rate={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(RatingVehicle);
