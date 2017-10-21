import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import '../views.css';

class StudentView extends Component {
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <div className="content">
                        Name : Steven <br/>
                        School : UST <br/>
                        Specialization : EEE
                    </div>
                    <div className="features">
                        <Link to="/">View Resources Added by Steven</Link>
                        <i className="glyphicon glyphicon-trash" onClick={this.props.onDeleteClick}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.props.onEditClick}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentView