import React from 'react';
import './index.css';
import ExpandBullet from './ExpandBullet.jsx';

class ExpSect extends React.Component {

    render(){
        return (
            <div className="expSect">
                <h2> {this.props.employer} </h2>
                <h5 id="subDetail"> {this.props.location} </h5>
                <h3> {this.props.jobTitle} </h3> 
                <ExpandBullet overview="Implemented a Python ABC class for device controllers" detail="Our system neede to interface with a clients Webcam and GSR device"/>
            </div>
        );
    }
}

export default ExpSect;