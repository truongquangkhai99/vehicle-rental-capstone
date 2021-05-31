import { withFormik, Form as FForm, Field } from 'formik';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import * as Yup from 'yup'

const SignUpForm = (props) => {
  return (
    <Container>
      <FForm>
        <Form id="sign-up-form" className="shadow my-2 px-sm-5">
          <h3 className="text-center">Đăng ký tài khoản</h3>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Tên đăng nhập*:</Form.Label>
            <Field
              name='username'
              render={({ field }) => (
                <Form.Control type="text"{...field} placeholder="Nhập tên tài khoản dùng để đăng nhập" />
              )} />
            {props.touched.username && <Form.Text className="text-danger">{props.errors.username}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Họ và tên*:</Form.Label>
            <Field
              name='fullName'
              render={({ field }) => (
                <Form.Control type="text"{...field} placeholder="Nhập họ và tên đầy đủ của bạn" />
              )} />
             {props.touched.fullName && <Form.Text className="text-danger">{props.errors.fullName}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email*:</Form.Label>
            <Field
              name='email'
              render={({ field }) => (
                <Form.Control type="text"{...field} placeholder="Nhập email của bạn" />
              )} />
             {props.touched.email && <Form.Text className="text-danger">{props.errors.email}</Form.Text>}
          </Form.Group>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Mật khẩu*:</Form.Label>
                <Field
                  name='password'
                  render={({ field }) => (
                    <Form.Control type="password"{...field} placeholder="Nhập mật khẩu" />
                  )} />
                 {props.touched.password && <Form.Text className="text-danger">{props.errors.password}</Form.Text>}
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="rePassword">
                <Form.Label>Nhập lại mật khẩu*:</Form.Label>
                <Field
                  name='rePassword'
                  render={({ field }) => (
                    <Form.Control type="password"{...field} placeholder="Nhập lại mật khẩu" />
                  )} />
                 {props.touched.rePassword && <Form.Text className="text-danger">{props.errors.rePassword}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="readPolicy">
            <Form.Check type="checkbox" label={<span>Tôi đã đọc và đồng ý với <a href="/">chính sách</a> của LOGO</span>} />
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3" type="submit">
            Đăng ký
        </Button>
          <hr />
          <Form.Text className="text-muted text-center d-block mb-3">
            Hoặc đăng nhập bằng tài khoản
        </Form.Text>
          <div className="d-flex gap-2">
            <Button variant="success" className="w-50">
              <GrFacebookOption className="icon" />Facebook
        </Button>
            <Button variant="danger" className="w-50 text-white">
              <AiOutlineGoogle className="icon" /> Google
        </Button>
          </div>
        </Form>
      </FForm>
    </Container>
  )
}

// @ts-ignore
const FormikForm = withFormik({
  mapPropsToValues() { // Init form field
    return {
      username: '',
      fullName: '',
      email: '',
      password: '',
      rePassword: '',
      readPolicy: '',
    }
  },
  validationSchema: Yup.object().shape({ // Validate form field
    username: Yup.string()
      .required('Đây là trường bắt buộc'),
    fullName: Yup.string()
      .required('Đây là trường bắt buộc'),
    email: Yup.string()
      .required('Đây là trường bắt buộc')
      .email('Nhập sai định dạng email'),
    password: Yup.string()
      .required('Đây là trường bắt buộc'),
    rePassword: Yup.string()
      .required('Đây là trường bắt buộc'),
  }),
})(SignUpForm)

export default FormikForm;