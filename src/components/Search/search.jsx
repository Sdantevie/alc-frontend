import React,  { Component } from 'react';

class CreateResource extends Component {
    render(){
        return (
            <div>
                <form class="navbar-form" role="search">
                    <div class="input-group add-on">
                        <input class="form-control" placeholder="Search Students/Resources" name="srch-term" id="srch-term" type="text"/>
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateResource