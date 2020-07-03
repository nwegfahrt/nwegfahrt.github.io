
import React from 'react';
import ReactDOM from 'react-dom';
import ResumePage from './resumePage.jsx'

class Test extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>Nicholas Wegfahrt!</h1>
        <ResumePage/>
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));