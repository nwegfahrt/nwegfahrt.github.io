import React from 'react';
import ExpSect from './ExpSect.jsx';

class ResumePage extends React.Component {

    render() {
        return(
            <div id="ResumePage">
                <h2>Summary</h2>
                <p>{this.props.SecInfo.Summary.Paragraph}</p>
                {
                    this.props.SecInfo.Experiences.map((experience, i) => {
                        return <ExpSect  key ={i} experience={experience}/>
                    })
                }
            </div>
        );
    }
}

export default ResumePage;