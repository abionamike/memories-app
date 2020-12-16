import React, { useEffect } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar';
import Card from './components/Card';
import CreateAndUpdate from './components/CreateAndUpdate';
import { listMemories } from './actions/memoryActions';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
`;

const MemoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
`;

const CreateContainer = styled.div`
  width: 35%;
`;

const App = () => {
  const dispatch = useDispatch();

  const { loading, memories, error } = useSelector(state => state.memoryList);

  console.log(memories);
  useEffect(() => {
    dispatch(listMemories());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
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
    </Container>
  );
}

export default App;
