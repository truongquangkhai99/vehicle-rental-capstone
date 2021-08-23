import React, { useState, useEffect } from 'react'
import { Visibility } from '@material-ui/icons'
import ModalUser from 'components/adminpage/modal/ModalUser';
import adminApi from './../../../api/adminApi';
import { FormControl } from 'react-bootstrap';

export default function UserList() {
    let [list, setlist] = useState([]);
    const [show, setShow] = useState(false);
    const [filterName, setFilterName] = useState("");
    const [filterPhone, setFilterPhone] = useState("");
    const [filterEmail, setFilterEmail] = useState("");
    const [filterStatus, setFilterStatus] = useState("-1");
    const [filterId, setFilterId] = useState("0");
    const [user, setuser] = useState({
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
    });
    const handleShow = (data) => {
        setShow(true);
        setuser(data);
    }
    const handleClose = () => {
        setShow(false);
    }
    useEffect(() => {
        // @ts-ignore
        adminApi.getUser().then(res => setlist(res));
    }, [])

    const handleStatus = (data) => {
        let temp = list;
        temp.forEach((item) => {
            if (item.id === data) {
                item.banned = !item.banned;
            }
        })
        setlist(temp);
        adminApi.updateUser(data)
    }

    if (filterName !== null) {
        let temp = list.filter((item) => {
            return item.fullName.toLowerCase().includes(filterName) === true
        })
        if (filterStatus === "-1") {
            list = temp;
        } else if (filterStatus === "1") {
            list = temp.filter(item => { return item.banned === true });
            console.log(list)
        } else {
            list = temp.filter(item => { return item.banned === false });
        }

    }
    if (filterPhone) {
        list = list.filter((item) => {
            return item.phone.toLowerCase().includes(filterPhone) === true
        })
    }
    if (filterEmail) {
        list = list.filter((item) => {
            return item.email.toLowerCase().includes(filterEmail) === true
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
        setFilterPhone("");
        setFilterEmail("");
        setFilterStatus("-1");
        setFilterId("0");
    }
    return (
        <div className="admin_users_list">
            <div className="admin_users_list_title">
                <h3>Danh sách tài khoản người dùng</h3>
            </div>
            <div className="admin_users_list_body">
                <table className="admin_users_table">
                    <thead className="admin_users_thead">
                        <tr>
                            <th className="admin_users_th">ID</th>
                            <th className="admin_users_th">Họ và tên</th>
                            <th className="admin_users_th">Số điện thoại</th>
                            <th className="admin_users_th">Email</th>
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
                                    name="filterPhone"
                                    value={filterPhone}
                                    type="number"
                                    onChange={({ target }) => setFilterPhone(target.value)} />
                            </td>
                            <td>
                                <FormControl
                                    name="filterEmail"
                                    value={filterEmail}
                                    type="email"
                                    onChange={({ target }) => setFilterEmail(target.value)} />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    onChange={({ target }) => setFilterStatus(target.value)}
                                    value={filterStatus}
                                >
                                    <option value="-1">Tất Cả </option>
                                    <option value="1">Ẩn</option>
                                    <option value="0">Kích Hoạt</option>
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
                                        <img src={item.avatarLink} alt="" className="admin_user_img" />
                                        <span className="admin_user_name">{item.fullName}</span>
                                    </td>
                                    <td className="admin_user_fullname">{item.phone}</td>
                                    <td className="admin_user_email">{item.email}</td>
                                    <td className="admin_user_status">{item.banned ? 'Ẩn' : 'Kích hoạt'}</td>
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
            <ModalUser user={user}
                // @ts-ignore
                show={show}
                onClose={handleClose}
                onStatus={handleStatus}
            />
        </div >
    )
}
