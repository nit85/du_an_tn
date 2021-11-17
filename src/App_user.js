import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Contact from './pages/contact';
import News from './pages/news';
import Index from './components/Navbar/index';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Contact from './pages/contact';
import News from './pages/news';
import Login from './pages/login';
import Giohang from './pages/giohang'
import React from 'react';
function App_user()  {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/news' component={News} />
        <Route path='/index' component={Index} />
        <Route path='/login' component={Login} />
        <Route path='/giohang' component={Giohang}/>
      </Switch>
    </Router>
  );
}

export default App_user;