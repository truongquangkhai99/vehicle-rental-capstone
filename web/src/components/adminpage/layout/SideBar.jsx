import React from 'react'
import '../../../styles/pages/_admin.scss'
import { Home, Timeline, TrendingUp, People, Commute, PostAdd, Mail, Message, Feedback, AttachMoney } from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem active">
                                <Home className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/admin/users" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <People className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Commute className="sidebarIcon" />
                            Vehicles
                        </li>
                        <li className="sidebarListItem">
                            <PostAdd className="sidebarIcon" />
                            Blogs
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notification
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Mail className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            Messages
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon" />
                            Feedback
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
