import React, { useState, useEffect } from 'react'
import { Modal, Carousel } from 'react-bootstrap';
import { Person, PinDrop } from '@material-ui/icons';
import Rating from 'react-rating'
import starempty from '../../../assets/images/star-empty.png'
import starfull from '../../../assets/images/star-full.png'

export default function ModalVehicle({ vehicle, show, onClose, onStatus }) {
    const [isShow, setIsShow] = useState(false);
    const [isActive, setisActive] = useState(false);
    useEffect(() => {
        setIsShow(show);
    }, [show])

    const handleClose = () => {
        setIsShow(false);
        onClose();
    }
    const handleStatus = () => {
        onStatus(vehicle.id)
        setisActive(!isActive);
    }
    return (
        <Modal
            show={isShow}
            onHide={handleClose}
            centered
            size={'xl'}
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title>Thông tin phương tiện</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_vehicle">
                    <div className="modal_vehicle_left">
                        <Carousel interval={2000}>
                            {
                                vehicle.images.map((/** @type {{ link: string; }} */ item, /** @type {React.Key} */ index) => (
                                    <Carousel.Item key={index}>
                                        <img src={item.link} alt="" className="modal_vehicle_img" />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className="modal_vehicle_right">
                        <span className="modal_vehicle_detail">Chi tiết phương tiện:</span>
                        <div className="modal_vehicle_info mb-3">
                            <Person className="modal_vehicle_icon" />
                            <span className="modal_vehicle_info_detail">{vehicle.user.fullName}</span>
                        </div>
                        <div className="modal_vehicle_info mb-3">
                            <PinDrop className="modal_vehicle_icon" />
                            <span className="modal_vehicle_info_detail">{vehicle.location.strAddress}</span>
                        </div>
                        <div className="modal_vehicle_info mb-3">
                            <span className="modal_vehicle_icon">Trạng thái:</span>
                            <span
                                onClick={handleStatus}
                                role="button"
                                className={vehicle.actived ? 'ms-1 badge bg-success text-wrap' : 'ms-1 badge bg-warning text-wrap'}
                            >
                                {vehicle.actived ? 'Hoạt động' : 'Chờ kiểm duyệt'}
                            </span>
                        </div>
                        <span className="modal_vehicle_info_title">Thông số xe:</span>
                        <div className="modal_vehicle_info_configure">
                            <div className="modal_vehicle_info_left">
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Biển số:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.licensePlates}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Hãng:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.model.name}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Năm SX:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.yom}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Động cơ:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.fuelType}</span>
                                </div>
                            </div>
                            <div className="modal_vehicle_info_right">
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Mức tiêu hao:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.fuelConsumption + "km/lit"}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Mô tả:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.description}</span>
                                </div>
                            </div>
                        </div>
                        <span className="modal_vehicle_info_title">Giá cước thuê xe:</span>
                        <div className="modal_vehicle_info_configure">
                            <div className="modal_vehicle_info_left">
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Giao xe:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.deliveryEnable ? 'Có' : 'Không'}</span>
                                </div>

                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Giảm giá:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.discountEnable ? 'Có' : 'Không'}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Phí giao xe:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.deliveryFee + "VND"}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Giá vượt giới hạn:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.outLimitFee + "VND/km"}</span>
                                </div>
                            </div>
                            <div className="modal_vehicle_info_right">
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Giá gốc:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.originPrice + "VND"}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Bán kính giao xe:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.deliveryRadius + "km"}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Bán kính giao xe miễn phí:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.deliveryRadiusFree + "km"}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Giới hạn quãng đường:</span>
                                    <span className="modal_vehicle_info_detail">{vehicle.limitDistance + "km"}</span>
                                </div>
                                <div className="modal_vehicle_info">
                                    <span className="modal_vehicle_icon">Đánh giá:</span>
                                    <span className="modal_vehicle_info_detail">
                                        <Rating
                                            // @ts-ignore
                                            style={{ marginLeft: "1rem" }}
                                            initialRating={4}
                                            emptySymbol={<img src={starempty} className="icon" alt='' />}
                                            fullSymbol={<img src={starfull} className="icon" alt='' />}
                                            readonly />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
