import userApi from 'api/userApi';
import { login } from 'app/slice/headerSlice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, CloseButton, Form as BForm } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';

const LoginForm = (props) => {
    const show = props.show;
    const handleClose = props.handleClose;
    const dispatch = useDispatch();
    const [badRequest, setBadRequest] = useState(false);
    return (
        <div>
            {show ?
                <div>
                    < div className="backdrop" ></div >
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .required('Đây là trường bắt buộc'),
                            password: Yup.string()
                                .required('Đây là trường bắt buộc')
                        })}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                const res = await userApi.login(values);
                                const cookies = new Cookies();
                                cookies.set('_token', res, { path: '/', maxAge: 3153600000 });
                                const action = login(res);
                                dispatch(action);
                                handleClose();
                                setBadRequest(false);
                            } catch (error) {
                                setBadRequest(true);
                            }
                        }}
                    >
                        <Form id="login-form" className="shadow my-2 px-sm-5">
                            <CloseButton className="close-button" onClick={handleClose} />
                            <p className="text-danger text-center">{badRequest?'Sai tên đăng nhập hoặc mật khẩu':null}</p>
                            <h3 className="text-center">Đăng nhập</h3>
                            <BForm.Group className="mb-3" controlId="username">
                                <BForm.Label>Tên đăng nhập*:</BForm.Label>
                                <Field name='username'>{({ field }) => (
                                    <BForm.Control type="text"{...field} placeholder="Nhập tên đăng nhập hoặc email" />)}
                                </Field>
                                <BForm.Text className="text-danger"><ErrorMessage name="username" /></BForm.Text>
                            </BForm.Group>
                            <BForm.Group className="mb-3" controlId="password">
                                <BForm.Label>Mật khẩu*:</BForm.Label>
                                <Field name='password'>{({ field }) => (
                                    <BForm.Control type="password"{...field} placeholder="Nhập mật khẩu" />)}
                                </Field>
                                <BForm.Text className="text-danger"><ErrorMessage name="password" /></BForm.Text>
                            </BForm.Group>
                            <BForm.Text className="text-muted">
                                Bạn chưa là thành viên? <a href="/sign-in">Hãy đăng ký ngay!</a>
                            </BForm.Text>
                            <Button variant="primary" className="w-100 my-3" type="submit">
                                Đăng nhập
                          </Button>
                            <hr />
                            <BForm.Text className="text-muted text-center d-block mb-3">
                                Hoặc đăng nhập bằng tài khoản
                          </BForm.Text>
                            <div className="d-flex gap-2">
                                <Button variant="success" className="w-50">
                                    <GrFacebookOption className="icon" />Facebook
                          </Button>
                                <Button variant="danger" className="w-50 text-white">
                                    <AiOutlineGoogle className="icon" /> Google
                          </Button>
                            </div>
                        </Form>
                    </Formik>
                </div > : null}
        </div>
    );
};
export default LoginForm;