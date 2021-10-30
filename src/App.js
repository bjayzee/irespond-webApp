import React from 'react';
import GlobalStyle from './globalStyles';
// import { BrowserRouter as Router, Switch, Route} from 'react-route-dom'
import { Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
    </div>
  );
}

export default App;
