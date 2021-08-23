import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import RegisterVehicleFirst from "components/registervehicle/RegisterVehicleFirst";
import RegisterVehicleSecond from "components/registervehicle/RegisterVehicleSecond";
import RegisterVehicleThird from "components/registervehicle/RegisterVehicleThird";
import store from "app/store";
import { validate } from "app/slice/registerSlice";
import { useSelector } from "react-redux";
import vehicleApi from "api/vehicleApi";

const validatePart1 = (data) => {
  const error = [];
  if (data.licensePlates === "") {
    error.push("licensePlates");
  }
  if (data.model.id === 0) {
    error.push("model");
  }
  if (data.fuelConsumption === 0) {
    error.push("fuelConsumption");
  }
  return error;
};
const validatePart2 = (data) => {
  const error = [];
  if (data.originPrice === 0) {
    error.push("originPrice");
  }
  if (data.location === null) {
    error.push("location");
  }
  console.log(data, error);
  return error;
};
export default function RegisterVehiclePage(props) {
  const register = useSelector((state) => state.register);
  const [page, setPage] = React.useState(1);
  const handleBack = () => setPage(page - 1);
  const handleNext = () => {
    let error = [];
    if (register.type !== "0") {
      if (page === 1) {
        error = validatePart1(register.data);
      } else {
        error = validatePart2(register.data);
      }
      if (error.length) {
        store.dispatch(validate(error));
      } else {
        setPage(page + 1);
      }
    }
  };
  const handleSubmit = () => {
    const type = register.type;
    const data = { ...register.data };
    const images = register.images;
    if (images.length && images.length>2) {
      const listImage = [];
      images.forEach((item, index) => {
        listImage.push({ id: index, mainImg: item.mainImg });
      });
      data.images = listImage;
      if (type === "bike") {
        vehicleApi.createBike(data).then((res) => {
          let formData = new FormData();
          const id = res.data.id;
          const name = `vehicle${id}-`;
          images.forEach((item, index) => {
            const file = new File([item.file], name + index);
            formData.append("files", file);
          });
          vehicleApi.uploadMultipleFiles(formData).then((res) => {
            console.log(res);
          });
          props.history.push("/myvehicles");
        });
      } else {
        vehicleApi.createCar(data).then((res) => {
          let formData = new FormData();
          const id = res.data.id;
          const name = `vehicle${id}-`;
          images.forEach((item, index) => {
            const file = new File([item.file], name + index);
            formData.append("files", file);
          });
          vehicleApi.uploadMultipleFiles(formData).then((res) => {
            console.log(res);
          });
        });
      }
    } else {
      store.dispatch(validate(["images"]));
    }
  };
  switch (page) {
    case 1:
      return (
        <>
          <RegisterVehicleFirst />
          <div className="register-footer">
            <Row className="main">
              <Col lg={6}>
                <Button className="left-btn" onClick={handleBack} disabled>
                  Quay lại
                </Button>
              </Col>
              <Col lg={6}>
                <Button
                  className="right-btn"
                  onClick={handleNext}
                  type="submit"
                >
                  Kế tiếp
                </Button>
              </Col>
            </Row>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <RegisterVehicleSecond />
          <div className="register-footer">
            <Row className="main">
              <Col lg={6}>
                <Button className="left-btn" onClick={handleBack}>
                  Quay lại
                </Button>
              </Col>
              <Col lg={6}>
                <Button
                  className="right-btn"
                  onClick={handleNext}
                  type="submit"
                >
                  Kế tiếp
                </Button>
              </Col>
            </Row>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <RegisterVehicleThird />
          <div className="register-footer">
            <Row className="main">
              <Col lg={6}>
                <Button className="left-btn" onClick={handleBack}>
                  Quay lại
                </Button>
              </Col>
              <Col lg={6}>
                <Button
                  className="right-btn"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Đăng kí
                </Button>
              </Col>
            </Row>
          </div>
        </>
      );
  }
}
