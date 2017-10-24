import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import '../views.css';

class StudentView extends Component {
    clicking = () => {
       this.props.getName(this.props.data.name);
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
                        <i className="glyphicon glyphicon-trash" onClick={this.props.onDeleteClick}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.props.onEditClick}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentView