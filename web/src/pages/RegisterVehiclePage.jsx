import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import RegisterVehicleFirst from 'components/registervehicle/RegisterVehicleFirst'
import RegisterVehicleSecond from 'components/registervehicle/RegisterVehicleSecond'
import RegisterVehicleThird from 'components/registervehicle/RegisterVehicleThird'

export default function RegisterVehiclePage() {

    const [page, setPage] = React.useState(1)
    const handleBack = () => setPage(page - 1)
    const handleNext = () => setPage(page + 1)
    switch (page) {
        case 1:
            return (
                <>
                    <RegisterVehicleFirst />
                    <div className="register-footer">
                        <Row className="main">
                            <Col lg={6}>
                                <Button className="left-btn" onClick={handleBack} disabled>Quay lại</Button>
                            </Col>
                            <Col lg={6}>
                                <Button className="right-btn" onClick={handleNext} type="submit">Kế tiếp</Button>
                            </Col>
                        </Row>
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <RegisterVehicleSecond />
                    <div className="register-footer">
                        <Row className="main">
                            <Col lg={6}>
                                <Button className="left-btn" onClick={handleBack}>Quay lại</Button>
                            </Col>
                            <Col lg={6}>
                                <Button className="right-btn" onClick={handleNext} type="submit">Kế tiếp</Button>
                            </Col>
                        </Row>
                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <RegisterVehicleThird />
                    <div className="register-footer">
                        <Row className="main">
                            <Col lg={6}>
                                <Button className="left-btn" onClick={handleBack}>Quay lại</Button>
                            </Col>
                            <Col lg={6}>
                                <Button className="right-btn" type="submit">Đăng kí</Button>
                            </Col>
                        </Row>
                    </div>
                </>
            )
    }

}