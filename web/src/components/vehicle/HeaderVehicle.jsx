import React from "react";
import StarRatings from "react-star-ratings"

function HeaderVehicle(props) {
  const vehicle = props.vehicle;
  const numRate = vehicle.rating.length
    ? vehicle.rating.reduce((ini, item) => {
        return ini + item.numStar;
      }, 0) / vehicle.rating.length
    : 0;
  return (
    <div className={`heading ${props.className}`}>
      <h1 className="title-vehicle">{vehicle.model.name}</h1>
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
        <span className="number-trips">{vehicle.numBooking} chuyến</span>
      </div>
      <div className="footer-vehicle">
        <span>{vehicle.transmission||vehicle.bikeType}</span>
        {vehicle.deliveryEnable ? <span>Giao xe tận nơi</span> : null}
      </div>
    </div>
  );
}

export default React.memo(HeaderVehicle);
