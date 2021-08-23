import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { Person, EventAvailable, Wc, Phone, LocationSearching, Mail, Policy, VerifiedUser } from '@material-ui/icons';
/**
 * @param {any} show
 */
export default function ModalUser({ user, show, onClose, onStatus }) {
    const [showLicense, setshowLicense] = useState(false);
    const [isActive, setisActive] = useState(false);
    const [User, setUser] = useState(user);
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        setUser(user)
        setIsShow(show);
    }, [setUser, show, user])
    const handleCloseLicense = () => setshowLicense(false);
    const handleShowLicense = () => {
        setshowLicense(true);
    }
    const handleClose = () => {
        setIsShow(false);
        onClose();
    }
    const handleStatus = () => {
        onStatus(User.id);
        setisActive(!isActive);
    }
    return (
        <Modal
            show={isShow}
            onHide={handleClose}
            centered
            size={'lg'}
        >
            <Modal.Header closeButton>
                <Modal.Title>Thông tin người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_user">
                    <div className="modal_user_title">
                        <img src={User.avatarLink} alt="" className="modal_user_img" />
                    </div>
                    <div className="modal_user_detail">
                        <span className="modal_user_account_detail">Chi tiết tài khoản:</span>
                        <div className="modal_user_info mt-3">
                            <Person className="modal_user_icon" />
                            <span className="modal_user_info_detail">{User.fullName}</span>
                        </div>
                        <div className="modal_user_info">
                            <EventAvailable className="modal_user_icon" />
                            <span className="modal_user_info_detail">{User.dob}</span>
                        </div>
                        <div className="modal_user_info">
                            <Wc className="modal_user_icon" />
                            <span className="modal_user_info_detail">{User.gender}</span>
                        </div>
                        <div className="modal_user_info">
                            <Phone className="modal_user_icon" />
                            <span className="modal_user_info_detail">{User.phone}</span>
                        </div>
                        <div className="modal_user_info">
                            <Mail className="modal_user_icon" />
                            <span className="modal_user_info_detail">{User.email}</span>
                        </div>
                        <div className="modal_user_info">
                            <VerifiedUser className="modal_user_icon" />
                            <span className="modal_user_info_detail">
                                {User.banned ? 'Ẩn' : 'Kích hoạt'}
                            </span>
                            <span
                                onClick={handleStatus}
                                role="button"
                                className={User.banned ? 'ms-3 badge bg-warning text-wrap' : 'ms-3 badge bg-success text-wrap'}
                            >
                                {User.banned ? 'Mở khóa' : 'Khóa'}
                            </span>

                        </div>
                        {
                            User.addresses.map((item, index) => (
                                <div className="modal_user_info" key={index}>
                                    <LocationSearching className="modal_user_icon" />
                                    <span className="modal_user_info_detail">{item.strAddress}</span>
                                </div>
                            ))
                        }
                        <div className="modal_user_info">
                            <Policy className="modal_user_icon" />
                            <span className="modal_user_info_detail">Giấy phép lái xe:
                                <button className="modal_user_button" onClick={handleShowLicense}>
                                    Xem
                                </button>
                            </span>
                            <Modal show={showLicense} onHide={handleCloseLicense} centered>
                                <Modal.Body>
                                    <img src={User.drivingLincense.imageLink} alt="" width="450px" height="350px" />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
