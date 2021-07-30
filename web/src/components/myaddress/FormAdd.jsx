import React from 'react'
import { Modal, ModalTitle, ModalBody, ModalFooter, Button, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { BiMapPin } from 'react-icons/bi'

export default function FormAdd(props) {
    const handleClick = function (e) {
        const types = document.querySelectorAll('.type')
        types.forEach((tab, index) => {
            tab.classList.remove('active')
            if (types[index] === e.target) {
                e.target.classList.add('active')
            } else {
                e.target.parentElement.classList.add('active')
            }

        })
    }
    return (
        <Modal show={props.showFormAdd} onHide={props.handleClose}>
            <ModalHeader closeButton>
                <ModalTitle style={{ fontSize: "30px" }}>Thêm địa chỉ</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <FormGroup className="mb-3">
                    <FormLabel>Loại địa chỉ</FormLabel>
                    <div className="address-type">
                        <div className="type active" onClick={handleClick}>
                            <AiOutlineHome id="icon-type" />
                            <span>Nhà riêng</span>
                        </div>
                        <div className="type" onClick={handleClick}>
                            <HiOutlineOfficeBuilding id="icon-type" />
                            <span>Công ty</span>
                        </div>
                        <div className="type" onClick={handleClick}>
                            <BiMapPin id="icon-type" />
                            <span>Khác</span>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Tên gợi nhớ</FormLabel>
                    <FormControl type="text"></FormControl>
                </FormGroup >
                <FormLabel>Địa chỉ</FormLabel>
                <FormGroup className="mb-3">
                    <FormText muted>Tỉnh/ Thành phố</FormText>
                    <select className="form-select form-select-md mb-3" defaultValue="Chọn tên thành phố">
                        <option>Chọn tên thành phố</option>
                        <option>123</option>
                        <option>123</option>
                        <option>123</option>
                    </select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormText muted>Quận/ Huyện</FormText>
                    <select className="form-select form-select-md mb-3" defaultValue="Chưa chọn">
                        <option>Chưa chọn</option>
                        <option>123</option>
                        <option>123</option>
                        <option>123</option>
                    </select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormText muted>Phường/ Xã</FormText>
                    <select className="form-select form-select-md mb-3" defaultValue="Chưa chọn">
                        <option>Chưa chọn</option>
                        <option>123</option>
                        <option>123</option>
                        <option>123</option>
                    </select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormText muted>Đường</FormText>
                    <FormControl type="text"></FormControl>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" className="w-100 my-3" type="submit">Lưu</Button>
            </ModalFooter>
        </Modal>
    )
}
