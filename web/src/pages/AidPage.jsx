import aidApi from "api/aidApi";
import Loading from "components/layout/Loading";
import { ErrorMessage, Field, Formik, Form as FForm } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import * as Yup from "yup";
import { NOTI } from "constants/index";
//@ts-ignore
import { store as noti } from "react-notifications-component";

function AidPage() {
  const [find, setFind] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState("idle");
  const handleFind = () => {
    aidApi.findAid({ licensePlate: find }).then((res) => {
      setResult(res);
    });
  };
  return (
    <Container className="page-content">
      <Row>
        <div className="mt-3">
          <h2 className="text-center mb-3">Hướng dẫn</h2>
          <Row>
              <Col lg={6}>
                <h4 className="text-center">Tìm kiếm trợ giúp</h4>
                <p>Nhập biển số xe của người bị nạn để tìm danh sách những người bảo hộ đã được họ thêm trước đấy. Danh sách có tên và số điện thoại của người bảo hộ. Gọi ngay cho người đó để tới trợ giúp cho người bị nạn.</p>
              </Col>
              <Col lg={6}>
                <h4 className="text-center">Thêm thông tin</h4>
                <p>Hãy nhập biển số xe của bạn hoặc người thân, và tên, số điện thoại của người bảo hộ để đề phòng những lúc rủi ro cần người khác tìm kiếm.</p>
              </Col>
          </Row>
        </div>
        <Col lg={6} className="p-lg-2">
          <div className="p-3 shadow">
            <h3 className="text-center">Tìm kiếm trợ giúp</h3>
            <Form>
              <Form.Group controlId="form-group-id">
                <Form.Label>Nhập biển số xe:</Form.Label>
                <Form.Control
                  autoComplete="off"
                  className={`${find != "" ? "text-uppercase" : ""}`}
                  type="text"
                  placeholder="Nhập biển số xe cần tìm trợ giúp"
                  onChange={(evt) => setFind(evt.target.value)}
                />
                <Button variant="primary h-auto my-3" onClick={handleFind}>
                  Tìm kiếm
                </Button>
              </Form.Group>
            </Form>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên</th>
                  <th>Số điện thoại</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col lg={6} className="p-lg-2">
          <div className="shadow p-3">
            <h3 className="text-center">Thêm thông tin</h3>
            <Formik
              initialValues={{
                licensePlate: "",
                userName: "",
                aidName: "",
                aidPhone: "",
              }}
              validationSchema={Yup.object({
                licensePlate: Yup.string().required("Đây là trường bắt buộc"),
                aidName: Yup.string().required("Đây là trường bắt buộc"),
                aidPhone: Yup.string()
                  .required("Đây là trường bắt buộc")
                  .test(
                    "len",
                    "Phải có 10 số",
                    (val) => val && val.length === 10
                  )
                  .matches(/^[0-9\s]+$/, "Chỉ nhập số"),
              })}
              onSubmit={(values) => {
                setStatus("loading");
                aidApi
                  .addAid({ ...values })
                  .then((res) => {
                    setStatus("idle");
                    noti.addNotification({
                      ...NOTI,
                      title: "Thành công",
                      message: "Bạn đã thêm người bảo hộ thành công!!!",
                      type: "success",
                      dismiss: {
                        duration: 2000,
                      },
                      width: 160,
                    });
                  })
                  .catch(() => {
                    setStatus("duplicate");
                  });
              }}
            >
              <FForm>
                {status === "loading" ? (
                  <div className="position-relative">
                    <Loading type="inline" />
                  </div>
                ) : (
                  <p className="text-danger text-center">
                    {status === "duplicate"
                      ? "Thông tin bạn nhập đã tồn tại trong hệ thống"
                      : null}
                  </p>
                )}
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Biển số xe*:</Form.Label>
                  <Field name="licensePlate">
                    {({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        placeholder="Nhập biển số xe"
                      />
                    )}
                  </Field>
                  <Form.Text className="text-danger">
                    <ErrorMessage name="licensePlate" />
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Tên người bảo hộ*:</Form.Label>
                  <Field name="aidName">
                    {({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        placeholder="Nhập tên người bảo hộ vd: Nguyễn Văn A"
                      />
                    )}
                  </Field>
                  <Form.Text className="text-danger">
                    <ErrorMessage name="aidName" />
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Số điện thoại người bảo hộ*:</Form.Label>
                  <Field name="aidPhone">
                    {({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        placeholder="Nhập sđt người bảo hộ"
                      />
                    )}
                  </Field>
                  <Form.Text className="text-danger">
                    <ErrorMessage name="aidPhone" />
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" className="h-auto" type="submit">
                  Thêm người bảo hộ
                </Button>
              </FForm>
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AidPage;
