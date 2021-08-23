import userApi from "api/userApi";
import { login } from "app/slice/userSlice";
import store from "app/store";
import Loading from "components/layout/Loading";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Form as BForm, Modal, Row } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import Cookies from "universal-cookie";
import * as Yup from "yup";

const ChangePasswordForm = (props) => {
  const handleClose = props.handleClose;
  const [status, setStatus] = useState(0);
  const redirect = () => {
    localStorage.setItem("_pathname", window.location.pathname);
    localStorage.setItem("_search", window.location.search);
  };
  return (
    <Formik
      initialValues={{ password: "", newPassword: "", rePassword: "" }}
      validationSchema={Yup.object({
        password: Yup.string().required("Đây là trường bắt buộc"),
        newPassword: Yup.string().required("Đây là trường bắt buộc"),
        rePassword: Yup.string()
          .required("Đây là trường bắt buộc")
          .oneOf([Yup.ref("newPassword")], "Mật khẩu nhập lại chưa khớp"),
      })}
      onSubmit={(values) => {
        setStatus(1);
        userApi.changePassword({password:values.password,newPassword:values.newPassword})
          .then((res) => {
            handleClose();
            setStatus(0);
          })
          .catch((res) => {
            setStatus(-1);
          });
      }}
    >
      <Modal
        show={true}
        onHide={handleClose}
        fullscreen="sm-down"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {status === 1 ? (
              <div className="position-relative">
                <Loading type="inline" />
              </div>
            ) : status === -1 ? (
              <p className="text-danger text-center">Sai mật khẩu</p>
            ) : status === 2 ? (
              <p className="text-primary text-center">
                Đổi mật khẩu thành công
              </p>
            ) : null}
            <BForm.Group className="mb-3" controlId="password">
              <BForm.Label>Mật khẩu*:</BForm.Label>
              <Field name="password">
                {({ field }) => (
                  <BForm.Control
                    type="password"
                    {...field}
                    placeholder="Nhập mật khẩu hiện tại"
                  />
                )}
              </Field>
              <BForm.Text className="text-danger">
                <ErrorMessage name="password" />
              </BForm.Text>
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="newPassword">
              <BForm.Label>Mật khẩu mới*:</BForm.Label>
              <Field name="newPassword">
                {({ field }) => (
                  <BForm.Control
                    type="password"
                    {...field}
                    placeholder="Nhập mật khẩu mới"
                  />
                )}
              </Field>
              <BForm.Text className="text-danger">
                <ErrorMessage name="newPassword" />
              </BForm.Text>
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="rePassword">
              <BForm.Label>Nhập lại*:</BForm.Label>
              <Field name="rePassword">
                {({ field }) => (
                  <BForm.Control
                    type="password"
                    {...field}
                    placeholder="Nhập lại mật khẩu mới"
                  />
                )}
              </Field>
              <BForm.Text className="text-danger">
                <ErrorMessage name="rePassword" />
              </BForm.Text>
            </BForm.Group>
            <Row>
              <Col xs={6}>
                <Button variant="primary" className="w-100 my-3" type="submit">
                  Đổi mật khẩu
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  variant="outline-primary"
                  className="w-100 my-3"
                  type="reset"
                >
                  Nhập lại
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Formik>
  );
};
export default React.memo(ChangePasswordForm);
