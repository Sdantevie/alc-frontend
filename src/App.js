import React, { Component } from 'react';
import Home from './components/Home/home';
import CreateResource from './components/CreateResource/createResource';
import ViewResource from './components/ViewResource/Views';
import Search from './components/Search/search.jsx';
import './App.css';

class App extends Component {
    render() {
        return ( 
        <div >
            <Home />
            <Search />
            <CreateResource />
            <ViewResource />
        </div>
        );
    }
}

export default App;