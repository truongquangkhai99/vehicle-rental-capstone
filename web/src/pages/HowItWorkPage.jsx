import React from 'react'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'

export default function HowItWorkPage() {
    return (
        <>
            <div className="how-it-work">
                <div className="heading">
                    <h1>HƯỚNG DẪN</h1>
                </div>
                <Tabs defaultActiveKey="customer" transition={false}>
                    <Tab eventKey="customer" title="Khách Thuê">
                        <div className="content">
                            <Row className="step">
                                <Col className="left" lg={6} md={4} xs={5}>
                                    <div className="img-step" style={{ backgroundPosition: "-7px -5px" }} />
                                </Col>
                                <Col className="right" lg={6} md={8} xs={7}>
                                    <div className="content-step">
                                        <div className="title">Đăng Nhập</div>
                                        <div className="desc">Đăng nhập vào Mioto qua Facebook, Google, số điện thoại hoặc email của bạn.</div>
                                        <span className="num-step">1</span>
                                    </div>
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step step2">
                                <Col className="left2" lg={6} md={8} xs={7} style={{ justifyContent: "flex-end" }}>
                                    <div className="content-step">
                                        <div className="title">Tìm Xe</div>
                                        <div className="desc">Bạn có thể tìm xe ưng ý nhanh chóng ở nơi bạn muốn tìm, thời gian, hãng xe, đặt xe nhanh</div>
                                        <span className="num-step">2</span>
                                    </div>
                                </Col>
                                <Col className="right2" lg={6} md={4} xs={5} style={{ justifyContent: "flex-start" }}>
                                    <div className="img-step" style={{ backgroundPosition: "-139px -5px", width: "140px", height: "148px" }} />
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step">
                                <Col className="left" lg={6} md={4} xs={5}>
                                    <div className="img-step different-url" style={{ backgroundPosition: "-256px 0px", width: "150px", height: "128px" }} />
                                </Col>
                                <Col className="right" lg={6} md={8} xs={7}>
                                    <div className="content-step">
                                        <div className="title">Đặt Xe</div>
                                        <div className="desc">Lựa chọn chiếc xe mà bạn ưng ý và gửi Yêu cầu xe đến Chủ xe. Sau đó chủ xe sẽ nhanh chóng phản hồi đến bạn trong thời gian nhanh nhất.</div>
                                        <span className="num-step">3</span>
                                    </div>
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step step2">
                                <Col className="left2" lg={6} md={8} xs={7} style={{ justifyContent: "flex-end" }}>
                                    <div className="content-step">
                                        <div className="title">Đặt Cọc</div>
                                        <div className="desc">Sau khi nhận được sự đồng ý từ chủ xe, khách hàng có thể đặt cọc bằng 3 hình thức chuyển khoản, ví điện tử hoặc tiền mặt.</div>
                                        <span className="num-step">4</span>
                                    </div>
                                </Col>
                                <Col className="right2" lg={6} md={4} xs={5} style={{ justifyContent: "flex-start" }}>
                                    <div className="img-step" style={{ backgroundPosition: "-289px -4px" }} />
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step">
                                <Col className="left" lg={6} md={4} xs={5}>
                                    <div className="img-step" style={{ backgroundPosition: "-428px -4px" }} />
                                </Col>
                                <Col className="right" lg={6} md={8} xs={7}>
                                    <div className="content-step">
                                        <div className="title">Nhận xe</div>
                                        <div className="desc">Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở Mioto, có nhiều chủ xe sẵn sàng đem xe đến tận nơi cho bạn.<br /> <br />
                                        Kiểm tra tình trạng và giấy tờ xe, xuất trình bản gốc các giấy tờ, kí xác nhận biên bản giao xe, nhận chìa khóa và bắt đầu hành trình của bạn</div>
                                        <span className="num-step">5</span>
                                    </div>
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step step2">
                                <Col className="left2" lg={6} md={8} xs={7} style={{ justifyContent: "flex-end" }}>
                                    <div className="content-step">
                                        <div className="title">Trả xe</div>
                                        <div className="desc">Sau khi hết thời gian thuê, bạn hoàn trả xe giống như tình trạng và thỏa thuận ban đầu. Kí xác nhận biên bản bàn giao, nhận lại giấy tờ để hoàn thành chuyến đi tuyệt vời của bạn. <br /><br />
                                        Đừng quên cho điểm rating và nhận xét của bạn đến chủ xe để nâng cao chất lượng phục vụ cho những hành trình sắp tới nhé!</div>
                                        <span className="num-step">6</span>
                                    </div>
                                </Col>
                                <Col className="right2" lg={6} md={4} xs={5} style={{ justifyContent: "flex-start" }}>
                                    <div className="img-step" style={{ backgroundPosition: "-567px -4px", height: "140px" }} />
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="owner" title="Chủ Xe">
                        <div className="content">
                            <Row className="step">
                                <Col className="left" lg={6} md={4} xs={5}>
                                    <div className="img-step" style={{ backgroundPosition: "-7px -5px" }} />
                                </Col>
                                <Col className="right" lg={6} md={8} xs={7}>
                                    <div className="content-step">
                                        <div className="title">Đăng Nhập</div>
                                        <div className="desc">Đăng nhập vào Mioto qua Facebook, Google, số điện thoại hoặc email của bạn.</div>
                                        <span className="num-step">1</span>
                                    </div>
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step step2">
                                <Col className="left2" lg={6} md={8} xs={7} style={{ justifyContent: "flex-end" }}>
                                    <div className="content-step">
                                        <div className="title">Đăng Ký Xe</div>
                                        <div className="desc">Bạn chỉ cần đưa thông tin, mô tả, hình ảnh xe của bạn lên hệ thống. Cập nhật thời gian, mức giá mong muốn và các yêu cầu khác của bạn đối với khách thuê.&nbsp;
                                        <a href="">Hoặc bạn có thể đăng ký chủ xe tại đây</a></div>
                                        <span className="num-step">2</span>
                                    </div>
                                </Col>
                                <Col className="right2" lg={6} md={4} xs={5} style={{ justifyContent: "flex-start" }}>
                                    <div className="img-step" style={{ backgroundPosition: "-153px -163px", height: "132px" }} />
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step">
                                <Col className="left" lg={6} md={4} xs={5}>
                                    <div className="img-step" style={{ backgroundPosition: "-7px -163px", width: "137px" }} />
                                </Col>
                                <Col className="right" lg={6} md={8} xs={7}>
                                    <div className="content-step">
                                        <div className="title">Duyệt Xe</div>
                                        <div className="desc">Bạn chỉ cần chờ trong vài phút, hệ thống sẽ kiểm duyệt xe của bạn có đáp ứng đủ hay không yêu cầu cho thuê. Mioto sẽ chủ động liện hệ với bạn trong trường hợp có vấn đề phát sinh.</div>
                                        <span className="num-step">3</span>
                                    </div>
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step step2">
                                <Col className="left2" lg={6} md={8} xs={7} style={{ justifyContent: "flex-end" }}>
                                    <div className="content-step">
                                        <div className="title">Nhận Và Phản Hồi</div>
                                        <div className="desc">Khi có khách gửi yêu cầu thuê xe, bạn sẽ nhận được thông báo từ Mioto. Kiểm tra thông tin cá nhân của khách và xác nhận cho thuê sớm nhất có thể.
                                           <br /> <br /> Khi có sự đồng ý cho thuê từ bạn, khách thuê sẽ chuyển tiền đặt cọc để hoàn tất việc đặt xe.</div>
                                        <span className="num-step">4</span>
                                    </div>
                                </Col>
                                <Col className="right2" lg={6} md={4} xs={5} style={{ justifyContent: "flex-start" }}>
                                    <div className="img-step" style={{ backgroundPosition: "-296px -163px", height: "134px" }} />
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step">
                                <Col className="left" lg={6} md={4} xs={5}>
                                    <div className="img-step" style={{ backgroundPosition: "-428px -163px", width: "140px", height: "148px" }} />
                                </Col>
                                <Col className="right" lg={6} md={8} xs={7}>
                                    <div className="content-step">
                                        <div className="title">Bàn Giao Xe</div>
                                        <div className="desc">Bạn và khách thuê liên hệ gặp nhau để bàn giao xe. <br /> <br />
                                            Kiểm tra giấy phép lái xe, các giấy tờ liên quan và tài sản đặt cọc của khách.<br /> <br />
                                            Kiểm tra xe, kí xác nhận biên bản bàn giao và gửi chìa khóa xe của bạn cho vị khách đáng tin cậy.</div>
                                        <span className="num-step">5</span>
                                    </div>
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                            <Row className="step step2">
                                <Col className="left2" lg={6} md={8} xs={7} style={{ justifyContent: "flex-end" }}>
                                    <div className="content-step">
                                        <div className="title">Nhận Xe</div>
                                        <div className="desc">Sau khi hết thời gian khách thuê, gặp khách thuê, kiểm tra xe, kí biên bản bàn giao và nhận lại xe của bạn như thỏa thuận ban đầu. <br /><br />
                                            Đừng quên cho điểm rating khách thuê và gợi ý họ cho điểm bạn trên ứng dụng Mioto. Điều này sẽ tăng uy tín của bạn trong cộng đồng thuê xe tự lái Mioto.</div>
                                        <span className="num-step">6</span>
                                    </div>
                                </Col>
                                <Col className="right2" lg={6} md={4} xs={5} style={{ justifyContent: "flex-start" }}>
                                    <div className="img-step" style={{ backgroundPosition: "-567px -4px", height: "140px" }} />
                                </Col>
                                <div className="line-dot"></div>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
