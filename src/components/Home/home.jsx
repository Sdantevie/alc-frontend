import React,  { Component } from 'react';
import Search from '../Search/search.jsx';
import axios from 'axios';
import ProgressBar from 'react-progress-bar-plus'
import 'react-progress-bar-plus/lib/progress-bar.css';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: 0,
            loggedIn: false
        };
    }     
    onShow = () => {
        this.setState({percent: 0});
    }
    onHide = () => {
        this.setState({percent: 100, loggedIn: true});
    }

    componentDidMount(){
        this.onShow();
        axios.post('http://192.168.43.196:3001/api/authenticate', {
            name: 'Student Resource Center'
        })
        .then((response) => {
            console.log(response.data);
            this.onHide();
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
            <div className="home">
                <ProgressBar 
                percent= {this.state.percent}
                autoIncrement={true}
                intervalTime={(Math.random() * 1000)}
                spinner= {false}/>
                <h1>Student Resource Center</h1>
                <Search appear={this.state.loggedIn}/>
            </div>
        );
    }
}

export default Home;