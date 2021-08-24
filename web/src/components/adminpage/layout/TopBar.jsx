import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import store from 'app/store';
import { logout } from 'app/slice/userSlice';
import { useHistory } from 'react-router-dom';
export default function TopBar(props) {
    // @ts-ignore
    const user = useSelector(state => state.logged).data
    const history = useHistory()
    const handleLogout = () => {
        history.push("/")
        store.dispatch(logout())
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Trang Quản Trị</span>
                </div>
                <div className="topRight">
                    <span className="text-white" >{user.fullName}</span>
                    <img src={user.avatarLink}
                        alt="" className="topAvatar" />
                    <button className="btn" onClick={handleLogout}>Đăng xuất</button>
                </div>
            </div>
        </div>
    )
}
