import React from 'react'
import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import app from '../../assets/images/app-4.png'
import appapple from '../../assets/images/appstore.png'
import appgoogle from '../../assets/images/ggplay.png'
export default function AppInstall() {
    return (
        <Row>
            <div className="app-container">
                <div className="app-left">
                    <h1 className="mb-4">Ứng dụng cho điện thoại</h1>
                    <h5 className="mb-4">Tải ngay ứng dụng tại App Store hoặc Google Play</h5>
                    <div className="app-image mb-3">
                        <div className="app-image-apple">
                            <img src={appapple} alt='' />
                        </div>
                        <div className="app-image-google">
                            <img src={appgoogle} alt='' />
                        </div>
                    </div>
                </div>
                <div className="app-right">
                    <img src={app} alt='' />
                </div>
            </div>
        </Row>
    )
}
