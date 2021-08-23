import vehicleApi from "api/vehicleApi";
import Loading from "components/layout/Loading";
import DescriptionVehicle from "components/vehicle/DescriptionVehicle";
import HeaderVehicle from "components/vehicle/HeaderVehicle";
import ImageSlide from "components/vehicle/ImageSlide";
import NoDriverSideBar from "components/vehicle/NoDriverSideBar";
import RatingVehicle from "components/vehicle/RatingVehicle";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

export default function BikePage(props) {
  const param = queryString.parse(window.location.search);
  const [bike, setBike] = useState({});
  const [like, setLike] = useState(false);
  const [status, setStatus] = useState("loading");
  const logged = useSelector(state=>state.logged).data;
  const handleUpdateLike = () => {
    if (like) {
      setLike(false);
      vehicleApi.updateLike({ id: param.id, status: false });
    } else {
      setLike(true);
      vehicleApi.updateLike({ id: param.id, status: true });
    }
  };

  useEffect(() => {
    vehicleApi
      .getVehicle({ id: param.id })
      .then((res) => {
        setBike(res.data);
        setStatus("success");
      })
      .catch((res) => {
        setStatus("error");
      });
    vehicleApi.checkLiked({ id: param.id }).then((res) => {
      setLike(res);
    });
  }, [param.id]);
  return (
    <div className="page-content">
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className="vehicle">
          <ImageSlide vehicle={bike} />
          <Row className="vehicle__body container">
            <Col lg={7} className="vehicle__body-content order-2 order-lg-1">
              <Row>
                <Col>
                  <HeaderVehicle vehicle={bike} className="d-none d-lg-block" />
                </Col>
                <Col xs={4}>
                  {logged ? (
                    <Button onClick={handleUpdateLike}>
                      {!like ? (
                        <>
                          Yêu thích <MdFavoriteBorder className="icon" />
                        </>
                      ) : (
                        <>
                          Bỏ thích <MdFavorite className="icon" />
                        </>
                      )}
                    </Button>
                  ) : null}
                </Col>
              </Row>

              <div className="desc">
                <DescriptionVehicle vehicle={bike} type="bike" />
              </div>
              <RatingVehicle vehicle={bike} />
            </Col>
            <Col
              lg={5}
              className="vehicle__body-sidebar order-1 order-lg-2 mt-5 mt-lg-0"
            >
              <NoDriverSideBar history={props.history} vehicle={bike} />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
