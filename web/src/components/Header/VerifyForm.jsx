// @ts-nocheck
import PropTypes from "prop-types";
// import { ErrorMessage, Field, Form, Formik } from "formik";
import Loading from "components/layout/Loading";
import React, { useState } from "react";
import { Button, Form as BForm } from "react-bootstrap";
import Timer from "components/Timer";
import UserApi from "api/userApi";
//@ts-ignore
import { store as noti } from "react-notifications-component";
import { NOTI } from "constants/index";
import store from "app/store";
import { verifySuccess } from "app/slice/userSlice";

function VerifyForm(props) {
  const handleClose = props.close;
  const handleTimeOut = () => {
    setTimeOut(true);
  };
  const [status, setStatus] = useState("idle");
  const [code, setCode] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const handleReSend = () => {
    setTimeOut(false);
    UserApi.sendVerify().then((jwtCode) => {
      //@ts-ignore
      sessionStorage.setItem("jwtCode", jwtCode);
    });
  };
  const handleSubmit = () => {
    setStatus("loading");
    if (code === "") {
      setStatus("null");
    }
    const jwtCode = sessionStorage.getItem("jwtCode");
    UserApi.verify({ code, jwtCode })
      .then(() => {
        store.dispatch(verifySuccess);
        sessionStorage.removeItem("jwtCode");
        noti.addNotification({
          ...NOTI,
          message: "Xác thực thành công",
          type: "success",
          dismiss: {
            duration: 3000,
          },
          width: 160,
        });
        handleClose();
      })
      .catch(() => {
        setStatus("wrong");
      });
  };
  const handleChange = (evt) => {
    setCode(evt.target.value);
  };
  return (
    <div>
      <BForm>
        <BForm.Group className="mb-3" controlId="email">
          <div className="position-relative text-danger text-center">
            {status === "loading" ? (
              <Loading type="inline" />
            ) : status === "wrong" ? (
              "Mã xác thực sai!"
            ) : null}
          </div>
          <BForm.Label>Mã xác thực*:</BForm.Label>
          <BForm.Control
            type="text"
            placeholder="Mã đã được gửi tới email của bạn"
            onChange={handleChange}
          />
          <BForm.Text className="text-danger">
            {status === "null" ? "Đây là trường bắt buộc" : null}
          </BForm.Text>
        </BForm.Group>
        <div className="d-flex gap-2">
          <Button
            variant="outline-primary w-50"
            disabled={!timeOut}
            onClick={handleReSend}
          >
            Gửi lại mã{" "}
            {!timeOut ? <Timer seconds={60} timeOut={handleTimeOut} /> : null}
          </Button>
          <Button variant="primary w-50" onClick={handleSubmit}>
            Xác thực
          </Button>
        </div>
      </BForm>
    </div>
  );
}

VerifyForm.propTypes = {
  close: PropTypes.func.isRequired,
};

export default VerifyForm;
