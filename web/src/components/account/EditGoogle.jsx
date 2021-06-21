import React from 'react'
import { Modal, Button, } from 'react-bootstrap'

export default function EditGoogle(props) {
    return (
        <Modal show={props.showGoogle} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{textAlign: "center"}}>Bạn có chắc muốn bỏ liên kết tài khoản của mình với tài khoản Google hiện tại?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="w-100 my-3" type="submit">Tiếp tục</Button>
            </Modal.Footer>
        </Modal>
    )
}
