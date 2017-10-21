import React,  { Component } from 'react';

class ResourceView extends Component {
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-body">
                    <div className="content">
                        Subject : The Right of schools <br/>
                        Link: http://www.google.com.ng
                    </div>
                    <div className="features">
                        <span>This resource was added by Steven</span>
                        <i className="glyphicon glyphicon-trash" onClick={this.props.onDeleteClick}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.props.onEditClick}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResourceView