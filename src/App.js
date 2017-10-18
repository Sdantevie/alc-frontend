import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import CreateResource from './components/CreateResource/createResource';
import ViewResource from './components/ViewResource/Views';
import Footer from './components/Footer/footer';
import './App.css';

class App extends Component {
    render() {
        return ( 
        <div className="container">
            <Switch>
                <Route exact = {true} path="/" component={Home} />
                <Route path="/createResource" component={CreateResource} />
                <Route path="/views" component={ViewResource}/>
              </Switch>
              <Footer/>
        </div>
        );
    }
}

export default App;