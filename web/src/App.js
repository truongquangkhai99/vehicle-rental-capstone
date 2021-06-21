import Footer from 'components/layout/Footer';
import Header from 'components/header/Header';
import HomePage from 'pages/HomePage';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/layout/NotFound';
import LoginPage from './pages/SignUp';
import SignUp from './pages/SignUp';
import AccountPage from 'components/account/AccountPage';
import MyFavoritePage from 'components/myfavorite/MyFavoritePage';
import MyAddressPage from 'components/myaddress/MyAddressPage';
import FindPage from 'components/find/FindPage';
function App() {  
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login"><LoginPage/></Route>
            <Route path="/sign-up"><SignUp/></Route>
            <Route path="/account"><AccountPage/></Route>
            <Route path="/myfavs"><MyFavoritePage/></Route>
            <Route path="/myaddress"><MyAddressPage/></Route>
            <Route path="/find"><FindPage/></Route>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
