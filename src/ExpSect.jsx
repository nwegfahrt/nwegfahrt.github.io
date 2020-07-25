import React from 'react';
import './index.css';
import ExpandBullet from './ExpandBullet.jsx';
//import image from  './imgs/iPipeline.png';

class ExpSect extends React.Component {

    render(){
        const images = require.context('./imgs', true);
        let image = images('./iPipeline.png')
        return (
            <div id='expSect'>
                <img id="watermark" src={image} alt="Error"></img>
                <div id="expText" >
                    <h2> {this.props.experience.Employer} </h2>
                    <h5 id="subDetail"> {this.props.experience.Location} </h5>
                    <h3> {this.props.experience.JobTitle} </h3> 
                    {
                        this.props.experience.Bullets.map((bullet, i) => {
                            return <ExpandBullet overview={bullet.Title} detail={bullet.Details}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ExpSect;