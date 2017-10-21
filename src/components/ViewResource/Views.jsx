import React,  { Component } from 'react';
import StudentView from './StudentView/studentView';
import ResourceView from './ResourceView/resourceView';
import Nav from '../Nav/nav';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import axios from 'axios';


class View extends Component {
    state = {
        percent : -1,
        studentResource : []
    }

    componentDidMount() {
        this.setState({
            percent : 0
        });
        axios({
            method : 'get',
            // url : 'http://localhost:3001/students',
            url : 'http://192.168.43.196:3001/students',
             headers : {
               'x-access-token' : this.props.token 
             }
        }).then(response => {
            this.setState({
                studentResource : response.data,
                percent : 100
            });
        }).catch((err) => {
            console.log(err);
            this.setState({
                percent : 100
            });
        });
    }

    editClick = () => {
        alert('You\'ll edit this mf' );
    }

    deleteClick = () => {
        alert('you\'ll soon delete this mf');
    }
    render(){
        console.log(this.state.studentResource);
        return (
            <div>
                 <ProgressBar 
                percent= {this.state.percent}
                autoIncrement={true}
                intervalTime={(Math.random() * 1000)}
                spinner= {'right'}/>
                <Nav  switch = {false}/>
                <br />
                <StudentView onEditClick={this.editClick} onDeleteClick={this.deleteClick} />
                <ResourceView onEditClick={this.editClick} onDeleteClick={this.deleteClick} />

            </div>
        );
    }
}

export default View