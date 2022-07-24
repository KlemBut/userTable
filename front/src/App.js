import Bar from './components/Bar'
import Form from './components/Form';
import Table from './components/Table';
import './App.css';
import { useState } from 'react';

function App() {
  const [getTrigger, setTrigger] = useState(0)
  return (
    <div className="App">
      <Bar getTrigger={getTrigger}></Bar>
      <Form getTrigger={getTrigger} setTrigger={setTrigger}></Form>
      <Table getTrigger={getTrigger}></Table>
    
    </div>
  );
}

export default App;
