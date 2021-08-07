import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"
import banner3 from "../../assets/images/banner3.jpg"
export default function BandRoll() {
    return (
        <div className="d-flex justify-content-around">
            <div>
                <div className="bandrollContent">
                    <h1>OURDRIVE</h1>
                    <h2>Dịch vụ thuê xe chất lượng hàng đầu</h2>
                </div>
            </div>
            <div className="d-none d-lg-block mt-3">
                <div className="bandrollImage">
                    <div className="bandrollImageShort">
                        <img src={banner1} alt="" />
                        <div className="overlayLeft"></div>
                    </div>
                    <div className="bandrollImageTall">
                        <img src={banner2} alt="" />
                        <div className="overlayCenter"></div>
                    </div>
                    <div className="bandrollImageShort me-5">
                        <img src={banner3} alt="" />
                        <div className="overlayRight"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
