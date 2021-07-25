import Header from 'components/Header/Header';
import Footer from 'components/layout/Footer';
import Loading from 'components/layout/Loading';
import AboutUsPage from 'pages/AboutUsPage';
import AccountPage from 'pages/AccountPage';
import BlogPage from 'pages/BlogPage';
import FindPage from 'pages/FindPage';
import HomePage from 'pages/HomePage';
import HowItWorkPage from 'pages/HowItWorkPage';
import MyAddressPage from 'pages/MyAddressPage';
import MyCardPage from 'pages/MyCardPage';
import MyFavsPage from 'pages/MyFavsPage';
import MyTripsPage from 'pages/MyTripsPage';
import PromoPage from 'pages/PromoPage';
import ShareCodePage from 'pages/ShareCodePage';
import SignUpPage from 'pages/SignUpPage';
import VehiclePage from 'pages/VehiclePage';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/layout/NotFound';
import ReactNotification from "react-notifications-component";
import OAuth2RedirectHandler from 'pages/OAuth2RedirectHandlerPage';
import { useSelector } from 'react-redux';
import AdminRoute from 'components/AdminRoute';
import UserRoute from 'components/UserRoute';


function App(props) {
  // @ts-ignore
  const isAdmin = useSelector(state => state.isAdmin).status;
  return (
    <div className="App">
      {isAdmin ? null : <Header />}
      <ReactNotification className="fs--1" />
      <Suspense fallback={<Loading />}>
        <Switch>
          <UserRoute exact path="/" component={HomePage} />
          <UserRoute path="/find" component={FindPage} />
          <UserRoute path="/signup" component={SignUpPage} />
          <UserRoute path="/howitword" component={HowItWorkPage} />
          <UserRoute role={true} path="/account" component={AccountPage} />
          <UserRoute role={true} path="/myfavs" component={MyFavsPage} />
          <UserRoute role={true} path="/mytrips" component={MyTripsPage} />
          <UserRoute role={true} path="/myaddress" component={MyAddressPage} />
          <UserRoute role={true} path="/mycard" component={MyCardPage} />
          <UserRoute role={true} path="/promo" component={PromoPage} />
          <UserRoute path="/aboutus" component={AboutUsPage} />
          <UserRoute path="/oauth2/redirect" component={OAuth2RedirectHandler}></UserRoute>
          <UserRoute path="/blog" component={BlogPage} />
          <UserRoute path="/find" component={FindPage} />
          <UserRoute path="/vehicle" component={VehiclePage} />
          <AdminRoute exact path="/admin" role="admin" component={MyFavsPage} />
          <UserRoute component={NotFound} />
        </Switch>
      </Suspense>
      {isAdmin ? null : <Footer />}
    </div>
  );
}

export default App;
