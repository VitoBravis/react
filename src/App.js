import React, {useState, useEffect} from 'react';
import './App.css';
import './style/test.scss'
import Main from './components/Main/index'

function App() {
    const [state, setState] = useState('Text');

    useEffect(() => {
        setState('Title')
    }, [])

  return (
    <div className="App">
      <header className="App-header">
          <Main title={state}/>
      </header>
    </div>
  );
}

export default App;
