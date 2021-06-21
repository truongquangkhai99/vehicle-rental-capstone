import React from 'react'
import { Modal, Button, FormGroup, FormControl, InputGroup, } from 'react-bootstrap'
import { AiOutlineUser } from 'react-icons/ai'
import { FcCalendar } from 'react-icons/fc'

export default function EditName(props) {

    return (
        <Modal show={props.showEditName} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật thông tin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <FormGroup className="mb-3">
                        <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><AiOutlineUser /></InputGroup.Text>
                        <FormControl type="text" placeholder="Tên hiển thị"></FormControl>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><FcCalendar/></InputGroup.Text>
                        <FormControl type="text" placeholder="Ngày sinh"></FormControl>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <select className="form-select form-select-md mb-3" defaultValue="Nam">
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="w-100 my-3" type="submit">Cập nhật</Button>
            </Modal.Footer>
        </Modal>

    )
}
