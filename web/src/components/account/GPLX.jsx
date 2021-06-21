import React from 'react'
import { Modal, Button, FormGroup, FormControl, FormLabel, FormText, } from 'react-bootstrap'

export default function GPLX(props) {
    return (
        <Modal show={props.showGPLX} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật giấy phép lái xe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <FormGroup className="mb-3">
                        <FormLabel>Số GPLX</FormLabel>
                        <FormControl type="text" placeholder="Dãy 12 chữ số ở mặt trước GPLX"></FormControl>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Họ và tên</FormLabel>
                        <FormControl type="text"></FormControl>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Ngày sinh</FormLabel>
                        <FormControl type="text"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Ảnh bằng lái xe</FormLabel><br/>
                        <FormText muted>Hình ảnh GPLX mặt trước</FormText>
                        <FormControl type="file"></FormControl>
                    </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="w-100 my-3" type="submit">Cập nhật</Button>
            </Modal.Footer>
        </Modal>
    )
}
