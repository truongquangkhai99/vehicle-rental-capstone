import React from 'react'
import { Visibility } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalVehicle from './../modal/ModalVehicle';
import adminApi from './../../../api/adminApi';
import { FormControl } from 'react-bootstrap';

export default function VehicleList() {
    let [list, setlist] = useState([]);
    const [show, setShow] = useState(false);
    const [filterName, setFilterName] = useState("");
    const [filterPlates, setFilterPlates] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterStatus, setFilterStatus] = useState("-1");
    const [filterId, setFilterId] = useState("0");
    useEffect(() => {
        // @ts-ignore
        adminApi.getVehicle().then(res => setlist(res));
    }, [])
    const [vehicle, setVehicles] = useState({
        actived: true,
        bluetooth: true,
        carType: 0,
        deliveryEnable: true,
        deliveryFee: 0,
        deliveryRadius: 0,
        deliveryRadiusFree: 0,
        description: "",
        distance: 0,
        driver: false,
        fuelConsumption: 0,
        fuelType: "",
        gps: true,
        id: 1,
        images: [
            {
                id: 0,
                link: "",
                mainImg: false,
            }
        ],
        kidChair: false,
        licensePlates: "",
        limitDistance: 0,
        limitEnable: false,
        location: {
            defaultAddress: false,
            districtCode: 0,
            id: 1,
            latitude: "",
            longitude: "",
            name: null,
            provinceCode: 0,
            strAddress: "",
            street: null,
            wardCode: 0
        },
        mainImg: "",
        map: false,
        model: {
            carProduction: true,
            id: 0,
            name: "",
            suggestPrice: 0
        },
        numBooking: 0,
        originPrice: 0,
        outLimitFee: 0,
        rating: [],
        reverseCamera: false,
        sunroof: false,
        transmission: "",
        usb: true,
        yom: "",
        user: {
            id: 0,
            fullName: '',
            phone: '',
            gender: '',
            email: '',
            emailVerified: false,
            role: '',
            banned: false,
            dob: '',
            avatarLink: '',
            wallet: '',
            responseRate: {
                id: 0,
                totalResponse: 0,
                totalRequest: 0,
                totalAgree: 0,
                totalHoursResponse: 0
            },
            drivingLincense: {
                id: 0,
                number: '',
                dob: '',
                imageLink: '',
                confirmed: '',
            },
            addresses: [
                {
                    id: 0,
                    provinceCode: 0,
                    districtCode: 0,
                    wardCode: 0,
                    street: '',
                    strAddress: '',
                    latitude: '',
                    longitude: '',
                    defaultAddress: false,
                    name: ''
                }
            ]
        }
    });
    console.log(list[0])
    const handleShow = (data) => {
        setShow(true);
        setVehicles(data);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleStatus = (data) => {
        let temp = list;
        temp.forEach((item) => {
            if (item.id === data) {
                item.actived = !item.actived;
            }
        })
        setlist(temp);
        adminApi.updateVehicle(data);
    }
    if (filterName !== null) {
        let temp = list.filter((item) => {
            return item.user.fullName.toLowerCase().includes(filterName) === true
        })
        if (filterStatus === "-1") {
            list = temp;
        } else if (filterStatus === "1") {
            list = temp.filter(item => { return item.actived === true });
            console.log(list)
        } else {
            list = temp.filter(item => { return item.actived === false });
        }

    }
    if (filterPlates) {
        list = list.filter((item) => {
            return item.licensePlates.toLowerCase().includes(filterPlates) === true
        })
    }
    if (filterLocation) {
        list = list.filter((item) => {
            return item.location.strAddress.toLowerCase().includes(filterLocation) === true
        })
    }
    if (filterId === "1") {
        // @ts-ignore
        list.sort((a, b) => {
            if (a.id > b.id) return "-1"
            else if (a.id < b.id) return "1"
            else return "0"
        })
    }
    const handleClearFilter = () => {
        setFilterName("");
        setFilterPlates("");
        setFilterLocation("");
        setFilterStatus("-1");
        setFilterId("0");
    }
    return (
        <div className="admin_users_list">
            <div className="admin_users_list_title">
                <h3>Danh sách phương tiện</h3>
            </div>
            <div className="admin_users_list_body">
                <table className="admin_users_table">
                    <thead className="admin_users_thead">
                        <tr>
                            <th className="admin_users_th">ID</th>
                            <th className="admin_users_th">Chủ xe</th>
                            <th className="admin_users_th">Biển số</th>
                            <th className="admin_users_th">Địa chỉ</th>
                            <th className="admin_users_th">Trạng thái</th>
                            <th className="admin_users_th">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterId"
                                    onChange={({ target }) => setFilterId(target.value)}
                                    value={filterId}
                                >
                                    <option value="1">
                                        ↑
                                    </option>
                                    <option value="0">
                                        ↓
                                    </option>
                                </select>
                            </td>
                            <td>
                                <FormControl
                                    name="filterName"
                                    value={filterName}
                                    type="text"
                                    onChange={({ target }) => setFilterName(target.value)}
                                />
                            </td>
                            <td>
                                <FormControl
                                    name="filterPlates"
                                    value={filterPlates}
                                    type="text"
                                    onChange={({ target }) => setFilterPlates(target.value)} />
                            </td>
                            <td>
                                <FormControl
                                    name="filterLocation"
                                    value={filterLocation}
                                    type="text"
                                    onChange={({ target }) => setFilterLocation(target.value)} />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    onChange={({ target }) => setFilterStatus(target.value)}
                                    value={filterStatus}
                                >
                                    <option value="-1">Tất Cả </option>
                                    <option value="0">Chờ kiểm duyệt</option>
                                    <option value="1">Hoạt động</option>
                                </select>
                            </td>
                            <td>
                                <button className="form-control" onClick={handleClearFilter}>Bỏ lọc</button>
                            </td>
                        </tr>
                        {
                            list.map((item, index) => (
                                <tr className="admin_users_thead" key={index}>
                                    <td className="admin_user_id">{item.id}</td>
                                    <td className="admin_user_title">
                                        <span className="admin_user_name">{item.user.fullName}</span>
                                    </td>
                                    <td className="admin_user_fullname">{item.licensePlates}</td>
                                    <td className="admin_user_email">{item.location.strAddress}</td>
                                    <td className="admin_user_status">{item.actived ? 'Hoạt động' : 'Chờ kiểm duyệt'}</td>
                                    <td className="admin_user_display">
                                        <button className="admin_user_button" onClick={() => handleShow(item)}>
                                            <Visibility className="admin_user_icon" />
                                            Xem
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <ModalVehicle vehicle={vehicle} show={show} onClose={handleClose} onStatus={handleStatus} />
        </div>
    )
}
