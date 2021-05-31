import Footer from 'components/layout/Footer';
import Header from 'components/header/Header';
import HomePage from 'pages/HomePage';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/layout/NotFound';
import LoginPage from './pages/SignUp';
import SignUp from './pages/SignUp';
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
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
