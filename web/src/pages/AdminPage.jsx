import AdminHome from 'components/adminpage/content/adminHome/AdminHome';
import Sidebar from 'components/adminpage/layout/SideBar';
import TopBar from 'components/adminpage/layout/TopBar';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/pages/_account.scss';
export default function AdminPage() {
    return (
        <div className="adminPage">
            <BrowserRouter>
                <TopBar />
                <div className="adminPageContainer fuild">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/admin">
                            <AdminHome />
                        </Route>
                        {/* <Route path="/users">
						<UserList />
					</Route>
					<Route path="/user/:userId">
						<User />
					</Route> */}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
