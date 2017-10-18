import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

class Search extends Component {
    render(){
        const element = (
            <div >
                <div className="row">
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
                        <Link to='/createResource'>
                            <img src = './images/images.png' alt='Add Resource' className="img-responsive center-block leImage"/>
                            Add New Resource
                        </Link>
                    </div>
                    <div className="col-lg-3"></div>
               </div>
            </div>
        );
        if(this.props.appear) {
            return element;
        } else {
            return null;
        }
    }
}

export default Search