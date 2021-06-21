import React from 'react'
import { Modal, Button, FormGroup, FormControl, } from 'react-bootstrap'

export default function EditEmail(props) {
    return (
        <Modal show={props.showEditEmail} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <FormGroup className="mb-3">
                        <FormControl type="text" placeholder="Email mới"></FormControl>
                    </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="w-100 my-3" type="submit">Cập nhật</Button>
            </Modal.Footer>
        </Modal>
    )
}
