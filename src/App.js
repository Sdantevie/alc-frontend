import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import CreateResource from './components/CreateResource/createResource';
import ViewResource from './components/ViewResource/Views';
import Footer from './components/Footer/footer';
import './App.css';

class App extends Component {
    state = {
        token : "",
        id : "",
        name : ""
    };

    getToken = (token) => {
        this.setState({token : token});
    };

    getId = (id) => {
        this.setState({id : id});
    }

    getName = (name) => {
        this.setState({name : name});
    }

   
    render() {
        console.log(this.state.name);
        // console.log(this.state.token);
        return ( 
        <div className="container">
            <Switch>
                <Route exact = {true} path="/" render={() => <Home getToken={this.getToken}/>}/>
                <Route path="/create" render={() => <CreateResource token={this.state.token} getId={this.getId} id={this.state.id} />} />
                <Route path="/views" render={() => <ViewResource token={this.state.token} getName={this.getName} name={this.state.name}/>}/>
              </Switch>
              <Footer/>
        </div>
        );
    }
}

export default App;