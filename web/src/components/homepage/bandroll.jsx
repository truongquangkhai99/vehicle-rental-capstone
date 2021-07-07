import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Slideshow from 'components/layout/Slideshow';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import img1 from '../../assets/images/xe1.jpg'
import img2 from '../../assets/images/xe2.jpg'
import img3 from '../../assets/images/xe3.jpg'
import img4 from '../../assets/images/xe4.jpg'
import img5 from '../../assets/images/quangcao1.jpg'
import img6 from '../../assets/images/quangcao2.jpg'
import img7 from '../../assets/images/quangcao3.jpg'

const collection = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }, { src: img6 }, { src: img7 }];
export default function Bandroll() {
    return (
        <Row>
            <Col>
                <div className="advertise">
                    <Slideshow
                        input={collection}
                        ratio={`3:2`}
                        mode={`automatic`}
                        timeout={`3000`}
                    />
                </div>
            </Col>
        </Row>

    )
}
