
import React from 'react';
import ReactDOM from 'react-dom';
import ResumePage from './resumePage.jsx'
import AboutMe from './data/AboutMe.json'

class Test extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>Nicholas Wegfahrt</h1>
        <ResumePage SecInfo = {AboutMe}/>
      </div>
    )
  }
}

ReactDOM.render(<Test/>, document.getElementById('root'));