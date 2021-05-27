import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const Text = ({value}) => (
  <div className='text'>
    {value.split('').map(char => (
      <div className='letter'>
        <span className='source'>{char}</span>
        <span className='shadow'>{char}</span>
        <span className='overlay'>{char}</span>
      </div>
    ))}
  </div>
);

const App = () => (
  <div className='app'>
    <Text value='The'/>
    <Text value='Haukai'/>
  </div>
);

ReactDOM.render(
  <App/>,
  document.body
);