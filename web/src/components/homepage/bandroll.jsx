import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"
import banner3 from "../../assets/images/banner3.jpg"
export default function BandRoll() {
    return (
        <Row style={{ marginTop: '100px' }}>
            <Col xs={5}>
                <div className="bandrollContent">
                    <h1>OURDRIVE</h1>
                    <h2>Dịch vụ thuê xe chất lượng hàng đầu</h2>
                    <h2 style={{ color: '#008248' }}>20% OFF </h2>
                    <h2> Cho lần đặt xe đầu tiên</h2>
                </div>
            </Col>
            <Col xs={7}>
                <div className="bandrollImage">
                    <div className="bandrollImageShort  ">
                        <img src={banner1} alt="" />
                        <div className="overlayLeft"></div>
                    </div>
                    <div className="bandrollImageTall">
                        <img src={banner2} alt="" />
                        <div className="overlayCenter"></div>
                    </div>
                    <div className="bandrollImageShort">
                        <img src={banner3} alt="" />
                        <div className="overlayRight"></div>
                    </div>
                </div>
            </Col>
        </Row>

    )
}
