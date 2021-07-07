import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import bh1 from '../../assets/images/baohiem1.png'
import bh2 from '../../assets/images/baohiem2.png'
import bh3 from '../../assets/images/baohiem3.png'
const baohiemimg = [bh1, bh2, bh3]
export default function Insurancepartner() {
    return (
        <Row>
        <Col>
            <div className="insurrance">
                <h3 className="text-center text-primary">ĐỐI TÁC BẢO HIỂM</h3>
                <div className="insurrance-banner">
                    {baohiemimg.map(
                        bhimg =>
                            <div className="insurrance-image" key={bhimg}>
                                <img src={bhimg} alt='' />
                            </div>
                    )
                    }
                </div>
            </div>
        </Col>
    </Row>
    )
}
