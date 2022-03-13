import React from 'react';
import './css/index.css';
import ExpandBullet from './ExpandBullet.jsx';
//import image from  './imgs/iPipeline.png';

class ExpSect extends React.Component {

    render(){
        const images = require.context('./imgs', true);
        let image = images(this.props.experience.Image.src)
        return (
            <div id='expSect' >
                <div id='watermark' style={{backgroundImage:`url(${image})`}} />
                {/*<img id="watermark" src={image} width={this.props.experience.Image.width} alt="Error"></img>*/}
                <div id="expText" >
                    <h2> {this.props.experience.Employer} </h2>
                    <h5 id="subDetail"> {this.props.experience.Location} </h5>
                    <h3> {this.props.experience.JobTitle} </h3> 
                    <div classname='BulletSec'>
                        {
                            this.props.experience.Bullets.map((bullet, i) => {
                                return <ExpandBullet overview={bullet.Title} detail={bullet.Details}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpSect;