import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import {
  Form as BForm,
  Modal,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormText,
} from "react-bootstrap";
import Cropper from "react-easy-crop";
import userApi from "api/userApi";
import { generateDownload } from "lib/CropUtils";

const GPLX = (props) => {
  const gplx = props.gplx;
  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const handleCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const handleSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(window.URL.createObjectURL(file));
    }
  };
  return (
    <Modal show={props.showGPLX} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật giấy phép lái xe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          enableReinitialize={true}
          initialValues={{
            number: gplx.number,
            dob: gplx.dob,
          }}
          validationSchema={Yup.object({
            number: Yup.string()
              .required("Đây là trường bắt buộc")
              .test("len", "Phải có 12 số", (val) => val && val.length === 12)
              .matches(/^[0-9\s]+$/, "Chỉ nhập số"),
            dob: Yup.string().required("Đây là trường bắt buộc"),
          })}
          onSubmit={(values) => {
            userApi.updateDrivingLicense({ ...values });
            let data = { ...values };
            data.imageLink=gplx.imageLink;
            data.confirmed=false;
            if (image) {
              const callback = (file, link) => {
                userApi.updateGPLX(file);
                data.imageLink = link;
              };
              generateDownload(image, croppedArea, callback);
            }
            props.handleClose();
            props.update(data);
          }}
        >
          <Form>
            <FormGroup className="mb-3">
              <FormLabel>Số GPLX</FormLabel>
              <Field name="number">
                {({ field }) => (
                  <BForm.Control
                    type="text"
                    {...field}
                    placeholder="Dãy 12 chữ số ở mặt trước GPLX"
                  />
                )}
              </Field>
              <BForm.Text className="text-danger">
                <ErrorMessage name="number" />
              </BForm.Text>
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Ngày sinh</FormLabel>
              <Field name="dob">
                {({ field }) => <BForm.Control type="date" {...field} />}
              </Field>
              <BForm.Text className="text-danger">
                <ErrorMessage name="dob" />
              </BForm.Text>
            </FormGroup>
            <FormGroup>
              <FormLabel>Ảnh bằng lái xe</FormLabel>
              <br />
              <FormText muted>Hình ảnh GPLX mặt trước</FormText>
              <FormControl
                type="file"
                accept="image/*"
                onChange={handleSelectFile}
              ></FormControl>
            </FormGroup>
            {image ? (
              <div id="crop-container">
                <div className="crop-container mt-3">
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={4.8 / 3}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={handleCropComplete}
                  />
                </div>
              </div>
            ) : (
              <img className="w-100 mt-3" src={gplx.imageLink}></img>
            )}

            <Button variant="primary" className="w-100 my-3" type="submit">
              Cập nhật
            </Button>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
};
export default React.memo(GPLX);
