import React from 'react'
import { Home, Timeline, TrendingUp, People, Commute, PostAdd, Mail, Message, Feedback } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem active">
                                <Home className="sidebarIcon" />
                                Trang Chủ
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Phân tích
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/admin/users" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <People className="sidebarIcon" />
                                Người Dùng
                            </li>
                        </Link>
                        <Link to="/admin/vehicles" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <Commute className="sidebarIcon" />
                                Phương tiện
                            </li>
                        </Link>
                        <Link to="/admin/blogs" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <PostAdd className="sidebarIcon" />
                                Bài viết
                            </li>
                        </Link>
                        <Link to="/admin/transactions" style={{ color: 'white', textDecoration: 'none' }}>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon" />
                                Giao Dịch
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Mail className="sidebarIcon" />
                            Email
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            Bình Luận
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon" />
                            Thông Báo
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
