import React, { useEffect, useState } from "react";
import { Tabs, Tab, Row, Container } from "react-bootstrap";
import ItemMyFavorite from "components/myfavorite/ItemMyFavorite";
import vehicleApi from "api/vehicleApi";
import Loading from "components/layout/Loading";

export default function MyFavsPage() {
  const [vehicles, setVehicles] = useState([]);
  const [status, setStatus] = useState("loading");
  const bikes = vehicles.filter((item) => {
    return item.bikeType;
  });
  const car = vehicles.filter((item) => {
    return item.driver === false;
  });
  const withDriver = vehicles.filter((item) => {
    return item.driver === true;
  });
  useEffect(() => {
    vehicleApi.getMyFavs().then((res) => {
      setVehicles(res);
      setStatus("idle");
    });
  }, []);
  return (
    <Container className="page-content">
     {status==="loading"?<Loading/>: <div className="myfavs">
        <Tabs defaultActiveKey="motor" transition={false}>
          <Tab eventKey="motor" title="Xe máy yêu thích">
            <Row className="items">
              {bikes.map((item, index) => {
                return <ItemMyFavorite type="bike" vehicle={item} key={index} />;
              })}
            </Row>
          </Tab>
          <Tab eventKey="self-driving" title="Xe tự lái yêu thích">
            <Row className="items">
            {car.map((item, index) => {
                return <ItemMyFavorite type="car" vehicle={item} key={index} />;
              })}
            </Row>
          </Tab>
          <Tab eventKey="have-driver" title="Xe có tài xế yêu thích">
            <Row className="items">
            {withDriver.map((item, index) => {
                return <ItemMyFavorite type="withDriver" vehicle={item} key={index} />;
              })}
            </Row>
          </Tab>
        </Tabs>
      </div>}
    </Container>
  );
}
