import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import app from '../../assets/images/app-4.png'
import appapple from '../../assets/images/appstore.png'
import appgoogle from '../../assets/images/ggplay.png'
export default function AppInstall() {
    return (
        <>
            <Row className="app-container">
                <Col className="app-left" lg={7} md={12}>
                    <h1 className="mb-4">Ứng dụng cho điện thoại</h1>
                    <h5 className="mb-4">Tải ngay ứng dụng tại App Store hoặc Google Play</h5>
                    <Row className="app-image mb-3">
                        <Col className="app-image-apple" lg={6} md={12}>
                            <img src={appapple} alt='' />
                        </Col>
                        <Col className="app-image-google" lg={6} md={12}>
                            <img src={appgoogle} alt='' />
                        </Col>
                    </Row>
                </Col>
                <Col className="app-right" lg={5} md={12}>
                    <img src={app} alt='' />
                </Col>
            </Row>
        </>
    )
}
