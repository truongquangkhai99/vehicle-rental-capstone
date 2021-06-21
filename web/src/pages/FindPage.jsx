import React from 'react'
import { Form, FormGroup, FormLabel, Row, Col, Button } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import { AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrPowerReset } from 'react-icons/gr'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ItemFind from 'components/find/ItemFind'

export default function FindPage() {
    const [isShowExtra, setIsShowExtra] = React.useState(true)
    const [styleExtra, setStyleExtra] = React.useState({
        display: 'none'
    })
    const handleClick = function () {
        if (!isShowExtra) {
            setStyleExtra({ display: 'none' })
        } else {
            setStyleExtra({ display: 'block' })
        }
        return setIsShowExtra(!isShowExtra)
    }
    return (
        <>
            <div id="find-page">
                <div className="find">
                    <Row className="find__header">
                        <Col className="find__header-location" lg={4} id="heading">
                            <label htmlFor="">Địa điểm</label>
                            <input type="text" placeholder="Nhập nơi bạn muốn tìm kiếm" />
                        </Col>
                        <Col className="find__header-start" lg={4} id="heading">
                            <label htmlFor="">Bắt đầu</label>
                            <div className="date-start" id="date">
                                <DatePicker
                                    // @ts-ignore
                                    selected={Date.now()} />
                            </div>
                            <div className="time-start">
                                <select defaultValue="00:00">
                                    <option value="">00:00</option>
                                    <option value="">01:00</option>
                                    <option value="">02:00</option>
                                </select>
                            </div>
                        </Col>
                        <Col className="find__header-end" lg={4} id="heading">
                            <label htmlFor="">Kết thúc</label>
                            <div className="date-end" id="date">
                                <DatePicker
                                    // @ts-ignore
                                    selected={Date.now()} />
                            </div>
                            <div className="time-end">
                                <select defaultValue="00:00">
                                    <option value="">00:00</option>
                                    <option value="">01:00</option>
                                    <option value="">02:00</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row className="find__content">
                        <Col className="find__content-options" lg={4}>
                            <Form>
                                <FormGroup id="group" className="mb-4">
                                    <FormLabel id="lable">Sắp xếp</FormLabel>
                                    <select className="form-select form-select-md mb-3" defaultValue="Tối ưu">
                                        <option>Tối ưu</option>
                                        <option>Ưu tiên khoảng cách</option>
                                        <option>Ưu tiên giá thấp</option>
                                        <option>Ưu tiên giá cao</option>
                                        <option>Ưu tiên đánh giá</option>
                                    </select>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormLabel id="lable">Mức giá</FormLabel>
                                    <FormRange></FormRange>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormCheckInput></FormCheckInput>
                                    <FormCheckLabel className="check-lable">
                                        <span>Chủ xe 5</span>
                                        <span id="icon-star"><AiFillStar /></span>
                                        <span id="icon-ques"><AiOutlineQuestionCircle /></span>
                                    </FormCheckLabel>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormLabel id="lable">Loại xe</FormLabel>
                                    <Row>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-mini.png" alt="" />
                                                </div>
                                                <span className="seat-number">4 chỗ<br />(Mini)</span>
                                                <span className="having-number">(155 xe)</span>
                                            </a>
                                        </Col>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-sedan.png" alt="" />
                                                </div>
                                                <span className="seat-number">4 chỗ <br />(Sedan)</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-hatchback.png" alt="" />
                                                </div>
                                                <span className="seat-number">4 chỗ<br />(Hatchback)</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-5-suv.png" alt="" />
                                                </div>
                                                <span className="seat-number">5 chỗ<br />(Gầm cao)</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-7-suv.png" alt="" />
                                                </div>
                                                <span className="seat-number">7 chỗ<br />(Gầm cao)</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-7-mpv.png" alt="" />
                                                </div>
                                                <span className="seat-number">7 chỗ<br />(Gầm thấp)</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-pickup.png" alt="" />
                                                </div>
                                                <span className="seat-number">Bán tải</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-mini.png" alt="" />
                                                </div>
                                                <span className="seat-number">Xe máy</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                        <Col lg={4}>
                                            <a className="element-a">
                                                <div className="find__content-options-img">
                                                    <img src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-mini.png" alt="" />
                                                </div>
                                                <span className="seat-number">Moto</span>
                                                <span className="having-number">(100 xe)</span>
                                            </a>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormLabel id="lable">Hãng xe</FormLabel>
                                    <select className="form-select form-select-md mb-3" defaultValue="all">
                                        <option value="all">Tất cả</option>
                                        <option value="">BMW</option>
                                        <option value="">Honda</option>
                                    </select>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormLabel id="lable">Truyền động</FormLabel>
                                    <select className="form-select form-select-md mb-3" defaultValue="all">
                                        <option value="all">Tất cả</option>
                                        <option value="">Số sàn</option>
                                        <option value="">Số tự động</option>
                                    </select>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormCheckInput></FormCheckInput>
                                    <FormCheckLabel className="check-lable">Đặt xe nhanh</FormCheckLabel>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormCheckInput></FormCheckInput>
                                    <FormCheckLabel className="check-lable">Chấp nhận passport</FormCheckLabel>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4">
                                    <FormCheckInput></FormCheckInput>
                                    <FormCheckLabel className="check-lable">Hỗ trợ bảo hiểm</FormCheckLabel>
                                </FormGroup>
                                <FormGroup id="group" className="mb-4" style={{ textAlign: 'right', color: '#00a54f' }}>
                                    <FormLabel id="lable" className="option-extra" onClick={handleClick}>Nâng cao</FormLabel>
                                </FormGroup>
                                <div className="find__content-options-extra" style={styleExtra}>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Số chỗ</FormLabel>
                                        <FormRange></FormRange>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Năm sản xuất</FormLabel>
                                        <FormRange></FormRange>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Giao xe tận nơi</FormCheckLabel>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Nhiên liệu</FormLabel>
                                        <select className="form-select form-select-md mb-3" defaultValue="all">
                                            <option value="all">Tất cả</option>
                                            <option value="">Xăng</option>
                                            <option value="">Dầu</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Mức tiêu thụ nhiên liệu</FormLabel>
                                        <FormRange></FormRange>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Tính năng</FormLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Cửa sổ trời</FormCheckLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Bluetooth</FormCheckLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Định vị GPS</FormCheckLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Khe căm USB</FormCheckLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Ghế trẻ em</FormCheckLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Bản đồ</FormCheckLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Camera lùi</FormCheckLabel><br />
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Giới hạng số KM</FormLabel>
                                        <FormRange></FormRange>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Phí vượt giới hạn</FormLabel>
                                        <FormRange></FormRange>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Khoảng cách</FormLabel>
                                        <FormRange></FormRange>
                                    </FormGroup>
                                    <FormGroup id="group" className="mb-4">
                                        <FormLabel id="lable">Hình ảnh</FormLabel><br />
                                        <FormCheckInput></FormCheckInput>
                                        <FormCheckLabel className="check-lable">Đã xác thực</FormCheckLabel>
                                    </FormGroup>
                                </div>
                                <Button type="reset" className="w-100"> <span id="icon-reset"><GrPowerReset style={{ color: "#00a54f" }} /></span>Bỏ lọc</Button>
                            </Form>
                        </Col>
                        <Col className="find__content-items" lg={8}>
                            <Row className="items">
                                <ItemFind />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
