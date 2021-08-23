import React from 'react'
import { Tabs, Tab, FormGroup, FormLabel, FormCheck } from 'react-bootstrap'
import { GrLocationPin } from 'react-icons/gr'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import { TiMediaRecord } from 'react-icons/ti'
import { CgFlagAlt } from 'react-icons/cg'
import GoogleMapReact from 'google-map-react'

export default function TabWithDriver() {
    return (
        <>
            <div className="tab-with-driver">
                <Tabs defaultActiveKey="urban" transition={false}>
                    <Tab eventKey="urban" title="Nội thành">
                        <FormGroup className="mb-3" style={{ height: "200px" }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCl-VoCEBsPXrdreQzdsapPNrXGpOTFCWo" }}
                                defaultZoom={10}
                                defaultCenter={{ lat: 10.823099, lng: 106.629662 }}
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel className="lable-form">Điểm đón</FormLabel> <br />
                            <a href="" id="tab-location"><i id="icon-tab-driver"><GrLocationPin /></i>Hồ Chí Minh</a> <hr />
                            <p>Di chuyển trong thành phố. <a href="">Tìm hiểu thêm</a></p>
                        </FormGroup>
                    </Tab>
                    <Tab eventKey="suburban" title="Liên tỉnh">
                        <FormGroup className="mb-3" style={{ height: "200px" }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCl-VoCEBsPXrdreQzdsapPNrXGpOTFCWo" }}
                                defaultZoom={10}
                                defaultCenter={{ lat: 10.823099, lng: 106.629662 }}
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel className="lable-form">Lộ trình</FormLabel> <br />
                            <a id="tab-location"><i id="icon-tab-driver"><GrLocationPin /></i>Hồ Chí Minh</a> <hr />
                            <span id="tab-location">
                                <i id="icon-tab-driver" style={{ top: "-2px" }}><TiMediaRecord /></i>
                                <input type="text" placeholder="Tôi muốn đến..." />
                            </span> <hr />
                        </FormGroup>
                        <FormCheck className="mb-3">
                            <FormCheckInput type="checkbox" id="flexCheckDefault" />
                            <FormCheckLabel >Tôi muốn đi một chiều</FormCheckLabel>
                        </FormCheck>
                        <div className="under-form-check">
                            <a id="tab-location"><i id="icon-tab-driver"><CgFlagAlt /></i>Trả khách tại điểm đón</a> <br />
                            <p>Di chuyển ngoài thành phố, hành trình 2 chiều. <a href="">Tìm hiểu thêm</a></p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}