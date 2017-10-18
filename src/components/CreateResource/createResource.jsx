import React,  { Component } from 'react';

class CreateResource extends Component {

    render(){
        return (
            <div className="container">
                <h2>Add a New Student/Resource</h2>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Student's Details</h3>
                </div>
                <div className="panel-body">
                    <div className="col-lg-6">
                        <span>First Name</span>
                        <input type="text" className="form-control" placeholder="First Name..."/>
                    </div>
                    <div className="col-lg-6">
                        <span>Last Name</span>
                        <input type="text" className="form-control" placeholder="Last Name..."/>
                    </div>
                    <div className="col-lg-12"><br/></div>
                    <div className="col-lg-6">
                        <span>Institution</span>
                        <input type="text" className="form-control" placeholder="Institution..."/>
                    </div>
                    <div className="col-lg-6">
                        <span>Course of Study</span>
                        <input type="text" className="form-control" placeholder="Course of Study..."/>
                    </div>
                </div>
          </div>
          <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Resources' Details</h3>
                </div>
                <div className="panel-body">
                <div className="col-lg-6">
                    <div class="radio">
                        <span>Category</span><br/>
                        <label><input type="radio" name="optradio"/>Book</label><br/>
                        <label><input type="radio" name="optradio"/>Video</label><br/>
                        <label><input type="radio" name="optradio"/>Article</label>
                    </div>
                </div>
                <div className="col-lg-6">
                        <span>Resource Subject</span>
                        <input type="text" className="form-control" placeholder="Subject.."/>
                        <span>Link</span>
                        <input type="text" className="form-control" placeholder="Link to Resource..."/>
                </div>
                </div>
          </div>
          <button type="button" class="btn btn-default">Submit</button>
          </div>
        );
    }
}

export default CreateResource;