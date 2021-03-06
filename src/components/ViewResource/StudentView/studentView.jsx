import React,  { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import '../views.css';

class StudentView extends Component {
    clicking = () => {
       this.props.getName(this.props.data.name);
    }

    editClick = () => {
        this.props.getId(this.props.data._id);
        let r = window.confirm('Are you Sure?');
        if(r){
            this.props.history.push('/create');
        }
    }
    deleteClick = () => {
       let r = window.confirm('Are you Sure');
       if(r) {
           axios({
               method : 'post',
               data : {
                    name: "",
                    school: "",
                    course: "",
                    subject: this.props.data.subject,
                    link: this.props.data.link,
               },
               url : `http://192.168.43.196:3001/students/${this.props.data._id}`,
               headers : {
                'x-access-token' : this.props.token 
                }
            }).then(response => {
              this.props.history.push('/views');
            }).catch((err) => {
                console.log(err);
            });
       }
    }
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <div className="content">
                        Name : {this.props.data.name} <br/>
                        School : {this.props.data.school} <br/>
                        Specialization : {this.props.data.course}
                    </div>
                    <div className="features">
                        <Link to="/views" onClick={this.clicking}>View Resources Added by {this.props.data.name}</Link>
                        <i className="glyphicon glyphicon-trash" onClick={this.deleteClick}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.editClick}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StudentView);