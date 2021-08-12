import userApi from "api/userApi";
import Timer from "components/Timer";
import { validateEmail } from "lib/Helper";
import React, { useState } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  Row,
  Col,
  Form,
} from "react-bootstrap";

const EditEmail = (props) => {
  const data = props.data;
  const [email, setEmail] = useState(data.email);
  const [emailVerified, setEmailVerified] = useState(data.emailVerified);
  const [status, setStatus] = useState("idle");
  const [verify, setVerify] = useState(false);
  const [code, setCode] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const handleTimeOut = () => {
    setTimeOut(true);
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    setEmail(value);
    setEmailVerified(false);
  };
  const handleChangeVerify = (evt) => {
    const value = evt.target.value;
    setCode(value);
  };
  const handleSubmit = () => {
    if (validateEmail(email)) {
      userApi
        .changeEmail({ email })
        .then(() => {
          setStatus("idle");
          props.update({ email, emailVerified });
        })
        .catch(() => {
          setStatus("wrong");
        });
    } else {
      setStatus("wrong-email");
    }
  };
  const handleSubmitVerify = () => {
    if (code === "") {
      setStatus("null");
      return;
    }
    const jwtCode = sessionStorage.getItem("jwtCode");
    userApi
      .verify({ code, jwtCode })
      .then(() => {
        props.update({ email, emailVerified:true });
        props.handleClose();
      })
      .catch(() => {
        setStatus("wrong-verify");
      });
  };
  const handleSendVerify = () => {
    setTimeOut(false);
    setVerify(true);
    userApi.sendVerify().then((jwtCode) => {
      //@ts-ignore
      sessionStorage.setItem("jwtCode", jwtCode);
    });
  };

  return (
    <Modal show={props.showEditEmail} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!verify ? (
          <FormGroup>
            <Form.Text className="text-danger">
              {status === "wrong-email"
                ? "Sai định dạng email"
                : status === "wrong"
                ? "Email đã được sử dụng"
                : status === "wrong-verify"
                ? "Mã xác thực sai"
                : null}
            </Form.Text>
            <FormControl
              type="text"
              onChange={handleChange}
              defaultValue={data.email}
              placeholder="Email mới"
            ></FormControl>
          </FormGroup>
        ) : (
          <FormGroup>
            <Form.Text className="text-danger">
              {status === "wrong-verify"
                ? "Mã xác thực sai"
                : status === "null"
                ? "Vui lòng nhập mã"
                : null}
            </Form.Text>
            <FormControl
              type="text"
              onChange={handleChangeVerify}
              value={code}
              placeholder="Nhập mã xác thực được gửi tới email"
            ></FormControl>
          </FormGroup>
        )}
      </Modal.Body>
      {!verify ? (
        <Row className="p-3">
          {!emailVerified ? (
            <Col>
              <Button onClick={handleSendVerify} variant="outline-primary">
                Xác thực
              </Button>
            </Col>
          ) : null}
          <Col>
            <Button onClick={handleSubmit} variant="primary" className="w">
              Cập nhật
            </Button>
          </Col>
        </Row>
      ) : (
        <Row className="p-3">
          <Col>
            <Button
              onClick={handleSendVerify}
              disabled={!timeOut}
              variant="outline-primary"
            >
              Gửi lại mã{" "}
              {!timeOut ? <Timer seconds={60} timeOut={handleTimeOut} /> : null}
            </Button>
          </Col>
          <Col>
            <Button onClick={handleSubmitVerify} variant="primary">
              Xác thực
            </Button>
          </Col>
        </Row>
      )}
    </Modal>
  );
};
export default React.memo(EditEmail);
