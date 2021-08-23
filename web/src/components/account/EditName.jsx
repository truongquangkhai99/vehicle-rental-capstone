import userApi from "api/userApi";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";

const EditName = (props) => {
  const info = props.info;
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState([]);
  const handleClose = props.handleClose;
  const handleUpdate = props.update;
  const handleChangeName = (evt) => {
    setFullName(evt.target.value);
  };
  const handleChangeDob = (evt) => {
    setDob(evt.target.value);
  };
  const handleChangeGender = (evt) => {
    setGender(evt.target.value);
  };
  const handleUpdateInfo = () => {
    const e = [];

    console.log(1,fullName);
    if (fullName === "") {
      e.push("name");
    }
    if (dob === "") {
      e.push("dob");
    }
    if (!e.length) {
      setError([]);
        userApi.updateUser({fullName,dob,gender});
        handleUpdate({
            fullName,dob,gender
        });
      handleClose();
    } else {
      setError(e);
    }
  };
  useEffect(() => {
    setFullName(info.fullName);
    setDob(info.dob);
    setGender(info.gender);
  }, [props]);

  return (
    <Modal show={props.showEditName} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật thông tin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup className="mb-3">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <AiOutlineUser />
            </InputGroup.Text>
            <FormControl
              onChange={handleChangeName}
              defaultValue={info.fullName}
              type="text"
              placeholder="Tên hiển thị"
            ></FormControl>
          </InputGroup>

          <Form.Text className="text-danger">
            {error.filter((item) => "name").length ? "Vui lòng nhập tên" : null}
          </Form.Text>
        </FormGroup>
        <FormGroup className="mb-3">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FcCalendar />
            </InputGroup.Text>
            <FormControl
              defaultValue={info.dob}
              onChange={handleChangeDob}
              type="Date"
              placeholder="Ngày sinh"
            ></FormControl>
          </InputGroup>
          <Form.Text className="text-danger">
            {error.filter((item) => "dob").length
              ? "Vui lòng chọn ngày sinh"
              : null}
          </Form.Text>
        </FormGroup>
        <FormGroup>
          <select
            className="form-select form-select-md mb-3"
            defaultValue={info.gender}
            onChange={handleChangeGender}
          >
            <option>Nam</option>
            <option>Nữ</option>
          </select>
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleUpdateInfo}
          variant="primary"
          className="w-100 my-3"
          type="submit"
        >
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default React.memo(EditName)