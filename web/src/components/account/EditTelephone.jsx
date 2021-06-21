import React from 'react'
import { Modal, Button, FormGroup, FormControl, } from 'react-bootstrap'

export default function EditTelephone(props) {
    return (
        <Modal show={props.showEditTelephone} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật số điện thoại</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <FormGroup className="mb-3">
                        <FormControl type="text" placeholder="Số điện thoại"></FormControl>
                    </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="w-100 my-3" type="submit">Cập nhật</Button>
            </Modal.Footer>
        </Modal>
    )
}
