import React from 'react';
import './index.css';

class ExpandBullet extends React.Component 
{
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            visible: false,
            btnText: "+"
        }
    }

    toggleDetails(){
        console.log(this.state.visible)
        var btnCont = this.state.visible ? "+" : "-"
        this.setState({
            visible: !this.state.visible,
            btnText: btnCont
        })
    }

    render() {
        return (
            <div>
                <div id="bulletLine">
                                <button id="toggle" onClick={this.toggleDetails} >{this.state.btnText}</button>
                                <h4 id="bulletMain"> {this.props.overview}</h4>
                </div>
                {
                    this.state.visible ? <div id="bulletDetail"> {this.props.detail}</div> : null
                } 
            </div>
        );
    }

}

export default ExpandBullet