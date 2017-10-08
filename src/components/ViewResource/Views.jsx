import React,  { Component } from 'react';
import StudentView from './StudentView/studentView';
import ResourceView from './ResourceView/resourceView';

class View extends Component {
    render(){
        return (
            <div>
                <StudentView />
                <ResourceView />
            </div>
        );
    }
}

export default View