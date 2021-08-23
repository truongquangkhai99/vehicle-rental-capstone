import React from 'react'
import { Modal, Button, FormGroup, FormLabel, Row, Col, FormControl, } from 'react-bootstrap'

export default function Address(props) {
    return (
        <Modal show={props.showAddress} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Chỉnh sửa địa chỉ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGroup className="mb-3">
                    <FormLabel>Tỉnh/ Thành phố</FormLabel>
                    <select className="form-select form-select-md mb-3" defaultValue="male">
                        <option>Chọn thành phố</option>
                        <option>api</option>
                    </select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Quận/ Huyện</FormLabel>
                    <select className="form-select form-select-md mb-3" defaultValue="male">
                        <option>Chọn quận</option>
                        <option>api</option>
                    </select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Phường/ Xã</FormLabel>
                    <select className="form-select form-select-md mb-3" defaultValue="male">
                        <option>Chọn phường</option>
                        <option>api</option>
                    </select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Đường</FormLabel>
                    <FormControl type="text" placeholder="Nhập tên đường/ Toà nhà"></FormControl>
                </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Row className="w-100">
                    <Col lg={6}>
                        <Button variant="dark">Huỷ bỏ</Button>
                    </Col>
                    <Col lg={6}>
                        <Button variant="primary" type="submit">Áp dụng</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    )
}