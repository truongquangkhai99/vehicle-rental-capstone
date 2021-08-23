import React, { useCallback, useRef, useState } from "react";
import { AiFillCar, AiOutlinePlusCircle, AiOutlineRight } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormText,
  FormControl,
  Modal,
  Button,
} from "react-bootstrap";
import Cropper from "react-easy-crop";
import { generateDownload } from "lib/CropUtils";
import EditAvatar from "components/account/EditAvatar";
import store from "app/store";
import { addImage, removeImage, setMainImg } from "app/slice/registerSlice";
import { useSelector } from "react-redux";

export default function RegisterVehicleThird() {
  const register = useSelector((state) => state.register);
  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const refForm = useRef(null);

  const handleRemoveImg = (index) => {
    store.dispatch(removeImage(index));
  };
  const handleMainImg = (index) => {
    console.log(123);
    store.dispatch(setMainImg(index));
  };
  const handleCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const handleSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(window.URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const callback = (file, link) => {
      let mainImg = register.images.length ? false : true;
      store.dispatch(addImage({ file, link, mainImg }));
      refForm.current.reset();
      setImage(null);
    };
    generateDownload(image, croppedArea, callback);
  };
  return (
    <>
      <div id="nav-control">
        <ul>
          <li>
            <Link to="/myvehicles">
              <span>
                <i>
                  <AiFillCar />
                </i>
                <span>Danh sách xe</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/registermode" className="border-left">
              <span style={{ color: "#00a54f" }}>
                <i>
                  <AiOutlinePlusCircle />
                </i>
                <span>Đăng kí xe</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/mywallet" className="border-left">
              <span>
                <i>
                  <BiWallet />
                </i>
                <span>
                  Số dư: <span id="line-bold">0đ</span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="register-vehicle">
        <div className="register-heading">
          <Row>
            <Col lg={4} className="register-heading-tab">
              <div className="tab-number">1</div>
              <p>Thông tin</p>
              <i className="icon-after">
                <AiOutlineRight />
              </i>
            </Col>
            <Col lg={4} className="register-heading-tab">
              <div className="tab-number">2</div>
              <p>Cho thuê</p>
              <i className="icon-after">
                <AiOutlineRight />
              </i>
            </Col>
            <Col lg={4} className="register-heading-tab">
              <div
                className="tab-number"
                style={{ backgroundColor: "#00A54F" }}
              >
                3
              </div>
              <p>Hình ảnh</p>
            </Col>
          </Row>
        </div>
        <div className="register-body mt-2">
          <Form ref={refForm} className="register-form">
            <FormGroup className="mb-3">
              <FormLabel>Hình ảnh</FormLabel> <br />
              <FormText>
                Đăng nhiều hình ở các góc độ khác nhau để tăng thông tin cho xe
                của bạn.
              </FormText>
              <FormControl
                type="file"
                accept="image/*"
                onChange={handleSelectFile}
              />
              <FormText className="text-danger">
                {register.error.filter((item) => {
                  return item === "originPrice";
                }).length
                  ? "Vui lòng thêm ít nhất 3 ảnh"
                  : null}
              </FormText>
            </FormGroup>

            <Row>
              {register.images.map((item, index) => {
                return (
                  <Col xs={6} md={4} key={index}>
                    <img width="100%" src={item.link} />
                    <div className="d-flex gap-2 mt-1">
                      <Button
                        size="sm"
                        variant="outline-primary"
                        className="fs--6 h-auto"
                        onClick={() => {
                          handleMainImg(index);
                        }}
                        disabled={item.mainImg ? true : false}
                      >
                        Mặc định
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        className="fs--6 h-auto"
                        onClick={() => {
                          handleRemoveImg(index);
                        }}
                      >
                        Xóa
                      </Button>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Form>
        </div>
      </div>
      {image ? (
        <Modal
          show={true}
          onHide={() => {
            setImage(null);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm ảnh</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="crop-container">
              <div className="crop-container">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={handleCropComplete}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleSubmit}
              variant="primary"
              className="w-100 my-3"
              type="submit"
            >
              Thêm
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}
