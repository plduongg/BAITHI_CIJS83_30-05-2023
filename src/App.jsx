import { useState } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
import Nav from './components/nav/Nav';

function App() {
  const [active, activeTab] = useState(0)
  return (
    <div className="App">
      <div className="main">
        <h2 className='title'>#Todo</h2>
        <Nav activeTab={activeTab} activeIndex={active}/>
        <Todos activeTab = {active}/>
      </div>
    </div>
  );
}

export default App;
