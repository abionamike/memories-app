import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar';
import Card from './components/Card';
import CreateAndUpdate from './components/CreateAndUpdate';
import { listMemories } from './actions/memoryActions'


const App = () => {
  const dispatch = useDispatch();
  const { loading, memoryList, error } = useSelector(state => state.memoryList);

  useEffect(() => {
    // listMemories();
  }, []);
  return (
    <div className="App">
      <AppBar />
      <div style={{ display: 'flex', border: '1px solid black' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap',width: '65%', border: '1px solid black' }}>
          {/* {memoryList.map(memory => (
            <Card memory={memory} />
          ))} */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div style={{ width: '35%', border: '1px solid black' }}>
          <CreateAndUpdate />
          create/update
        </div>
      </div>
    </div>
  );
}

export default App;
