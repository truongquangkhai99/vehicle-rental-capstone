import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import '../../../styles/pages/_admin.scss'
export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Panel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Language />
                    </div>
                    <div className="topbarIcons">
                        <Settings />
                    </div>
                    <img src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg"
                        alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
