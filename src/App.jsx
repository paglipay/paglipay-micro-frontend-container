import React from 'react';
import ReactDOM from 'react-dom';
import MicroFrontend1 from 'MicroFrontend1/MicroFrontend1';

const App = () => (
  <div>
    <h1>Container Application</h1>
    <MicroFrontend1 />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
