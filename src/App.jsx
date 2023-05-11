import { useState } from 'react';
import './App.css';
import Posts from './Posts';
import Todos from './Todos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Todos />
      {/* <Posts /> */}
    </div>
  );
}

export default App;
