import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from 'react-progress-bar-plus'
import 'react-progress-bar-plus/lib/progress-bar.css';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: -1,
            loggedIn: true
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
        axios.post(
            'http://192.168.43.196:3001/api/authenticate',
            // 'http://localhost:3000/api/authenticate',
             {
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
                    spinner= {'right'}/>
                <h1>Student Resource Center</h1>
                {this.state.loggedIn ?
                (<div><div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for Students/Resources..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button"><i className='glyphicon glyphicon-search'></i></button>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <br/>
                <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-3 ">
                            <Link to='/views'>
                                <img src = './images/download.png' alt='View Resource' className="img-responsive center-block leImage"/>
                                View All Resources/Students
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to='/create'>
                                <img src = './images/images.png' alt='Add Resource' className="img-responsive center-block leImage"/>
                                Add New Resource
                            </Link>
                        </div>
                        <div className="col-lg-3"></div>
                </div></div>)
                : (<div></div>) }
            </div>
        );
       
    }
}

export default Home;