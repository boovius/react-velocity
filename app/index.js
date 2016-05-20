import React from 'react';
import { VelocityComponent } from 'velocity-react';

console.log(VelocityComponent);

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

const styles = {
  backgroundColor: 'blue',
  width: '300px',
  height: '200px',
  position: 'absolute',
}

const Box = () => {
  return (
    <div >
      <div id='box' style={styles}>
         hello world
      </div>
    </div>
  )
}

export default class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <VelocityComponent animation={{top: '200px'}} duration={500}>
          <Box />
        </VelocityComponent>
      </div>
    )
  }
}

