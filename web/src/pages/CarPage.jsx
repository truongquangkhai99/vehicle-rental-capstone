import vehicleApi from "api/vehicleApi";
import Loading from "components/layout/Loading";
import DescriptionVehicle from "components/vehicle/DescriptionVehicle";
import HeaderVehicle from "components/vehicle/HeaderVehicle";
import ImageSlide from "components/vehicle/ImageSlide";
import NoDriverSideBar from "components/vehicle/NoDriverSideBar";
import RatingVehicle from "components/vehicle/RatingVehicle";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import {
  Button, Col, Row
} from "react-bootstrap";

export default function CarPage() {
  const param = queryString.parse(window.location.search);
  const [car, setCar] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    vehicleApi
      .getVehicle({ id: param.id })
      .then((res) => {
        setCar(res.data);
        setStatus("success");
      })
      .catch((res) => {
        setStatus("error");
      });
  }, [param.id]);
  return (
    <div className="page-content">
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className="vehicle">
        <ImageSlide vehicle={car} />
        <Row className="vehicle__body container">
          <Col lg={7} className="vehicle__body-content order-2 order-lg-1">
            <HeaderVehicle vehicle={car} className="d-none d-lg-block" />
            <div className="desc">
              <DescriptionVehicle vehicle={car} type="car" />

              <Row className="mb-4">
                <Col lg={6}>
                  <Button className="report-btn">Báo xấu</Button>
                </Col>
                <Col lg={6}>
                  <Button className="addFavs-btn">Thêm vào yêu thích</Button>
                </Col>
              </Row>
            </div>
            <RatingVehicle vehicle={car} />
          </Col>
          <Col
            lg={5}
            className="vehicle__body-sidebar order-1 order-lg-2 mt-5 mt-lg-0"
          >
            <NoDriverSideBar vehicle={car}/>
          </Col>
        </Row>
      </div>
      )}
    </div>
  );
}
