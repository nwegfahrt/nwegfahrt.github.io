import React from 'react';

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
                <table>
                    <tr>
                        <td>
                            <button id="toggle" onClick={this.toggleDetails} >{this.state.btnText}</button>
                        </td>
                        <td>
                            <h4> {this.props.overview}</h4>
                        </td>
                    </tr>
                </table>
                {
                    this.state.visible ? <div> {this.props.detail}</div> : null
                } 
            </div>
        );
    }

}

export default ExpandBullet