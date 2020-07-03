import React from 'react';
import ExpSect from './ExpSect.jsx';

class ResumePage extends React.Component {

    render() {
        return(
            <div id="ResumePage">
                <h2>Summary</h2>
                <p> Hi I'm Nick, a recent CS graduate from Drexel University</p>
                <ExpSect employer="Team Aspen" location="Philadelphia, PA" jobTitle="Developer"/>
            </div>
        );
    }
}

export default ResumePage;