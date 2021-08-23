import userApi from 'api/userApi'
import React, { useEffect, useState } from 'react'
import { Modal, Button, FormGroup, FormControl, } from 'react-bootstrap'

export default function EditTelephone(props) {
    const [phone, setPhone] = useState("");
    const handleClose = props.handleClose;
    const updatePhone = props.update;
    const handleUpdatePhone =()=>{
        userApi.updatePhone({phone});
        updatePhone(phone);
        handleClose();
    }
    const handleChange =(evt)=>{
        setPhone(evt.target.value);
    }
    useEffect(() => {
        setPhone(props.phone);
    }, [props])
    return (
        <Modal enforceFocus={false} show={props.showEditTelephone} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật số điện thoại</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <FormGroup className="mb-3">
                        <FormControl onChange={handleChange} type="text" defaultValue={props.phone} placeholder="Số điện thoại"></FormControl>
                    </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleUpdatePhone} variant="primary" className="w-100 my-3" type="submit">Cập nhật</Button>
            </Modal.Footer>
        </Modal>
    )
}
