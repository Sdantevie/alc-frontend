import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import CreateResource from './components/CreateResource/createResource';
import ViewResource from './components/ViewResource/Views';
import Footer from './components/Footer/footer';
import './App.css';

class App extends Component {
    state = {
        token : ""
    };

    getToken = (token) => {
        this.setState({token : token});
    };

    render() {
        console.log(this.state.token);
        return ( 
        <div className="container">
            <Switch>
                <Route exact = {true} path="/" render={() => <Home getToken={this.getToken}/>}/>
                <Route path="/create" render={() => <CreateResource token={this.state.token} />} />
                <Route path="/views" render={() => <ViewResource token={this.state.token}/>}/>
              </Switch>
              <Footer/>
        </div>
        );
    }
}

export default App;