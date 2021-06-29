import Header from 'components/Header/Header';
import Footer from 'components/layout/Footer';
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
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/layout/NotFound';


function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sign-up"><SignUpPage /></Route>
            <Route path="/account"><AccountPage /></Route>
            <Route path="/myfavs"><MyFavsPage /></Route>
            <Route path="/myaddress"><MyAddressPage /></Route>
            <Route path="/find"><FindPage /></Route>
            <Route path="/signup" component={SignUpPage} />
            <Route path="/howitword" component={HowItWorkPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/myfavs" component={MyFavsPage} />
            <Route path="/mytrips" component={MyTripsPage} />
            <Route path="/myaddress" component={MyAddressPage} />
            <Route path="/mycard" component={MyCardPage} />
            <Route path="/promo" component={PromoPage} />
            <Route path="/sharecode" component={ShareCodePage} />
            <Route path="/aboutus" component={AboutUsPage} />

            <Route path="/blog" component={BlogPage} />
            <Route path="/find" component={FindPage} />
            <Route path="/vehicle" component={VehiclePage} />

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
