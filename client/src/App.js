import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar';
import Card from './components/Card';
import CreateAndUpdate from './components/CreateAndUpdate';
import { listMemories } from './actions/memoryActions';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 80%;
  border: 1px solid red;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  border: 1px solid black;
  background-color: lightblue;
`;

const MemoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  border: 1px solid black;
`;

const CreateContainer = styled.div`
  width: 35%;
  border: 1px solid black;
`;

const App = () => {
  const dispatch = useDispatch();

  const { loading, memories, error } = useSelector(state => state.memoryList);

  console.log(memories);
  useEffect(() => {
    dispatch(listMemories());
  }, [dispatch]);
  return (
    <AppContainer>
      <AppBar />
      <Main>
        <MemoriesContainer>
          {memories && memories.map(memory => (
            <Card key={memory._id} memory={memory} />
          ))}
        </MemoriesContainer>
        <CreateContainer>
          <CreateAndUpdate />
        </CreateContainer>
      </Main>
    </AppContainer>
  );
}

export default App;
