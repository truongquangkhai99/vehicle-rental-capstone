import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Modal, Button, FormGroup, FormControl, FormLabel, FormText } from "react-bootstrap";

export default function GPLX(props) {
  const [file, setFile] = useState(null);
  const handleChangeFile = (evt) => {
    setFile(URL.createObjectURL(evt.target.files[0]));
  }
  // const gplx = props.gplx;
  return (
    <Formik
      initialValues={{
        number: "",
        dob: "",
        // imageLink: "",
      }}
      validationSchema={Yup.object({
        number: Yup.string().required("Đây là trường bắt buộc"),
        dob: Yup.string().required("Đây là trường bắt buộc"),
        imageLink: Yup.string().required("Đây là trường bắt buộc"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Modal show={props.showGPLX} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật giấy phép lái xe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className="mb-3">
            <FormLabel>Số GPLX</FormLabel>
            <FormControl
              type="text"
              placeholder="Dãy 12 chữ số ở mặt trước GPLX"
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Ngày sinh</FormLabel>
            <FormControl type="date"></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Ảnh bằng lái xe</FormLabel>
            <br />
            <FormText muted>Hình ảnh GPLX mặt trước</FormText>
            <FormControl type="file" onChange={handleChangeFile}></FormControl>
          </FormGroup>
          <img width="100%" src={file} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="w-100 my-3" type="submit">
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </Formik>
  );
}
