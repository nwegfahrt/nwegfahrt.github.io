import React from 'react';
import './index.css'

class ExpSect extends React.Component {

    render(){
        return (
            <div class="expSect">
                <h2> {this.props.employer} </h2>
                <h5 id="subDetail"> {this.props.location} </h5>
                <h3> {this.props.jobTitle} </h3> 
            </div>
        );
    }
}

export default ExpSect;