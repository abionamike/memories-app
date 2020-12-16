import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { createMemory, listMemories, updateMemory } from '../actions/memoryActions';
import { MEMORY_FETCH_RESET } from '../constants/memoryConstants';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid red;
    width: 250px;
    padding: 20px;
    margin: 15px;
`;

const CreateAndUpdate = () => {
    const dispatch = useDispatch();
    const { loading, memory, error } = useSelector(state => state.memoryFetch);

    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [fileError, setFileError] = useState('');

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        const config = {
            'Content-Type': 'multipart/form-data',
        }

        try {
            const { data } = await axios.post('/api/uploads', formData, config);
            setImage(data.filename);
        } catch (error) {
            setFileError(error);
        }
    }

    useEffect(() => {
        if(memory) {
            setCreator(memory.creator);
            setTitle(memory.title);
            setMessage(memory.message);
            setTags(memory.tags);
        }
    }, [memory]);

    const handleSubmit = () => {
        if(memory){
            dispatch(updateMemory({ _id: memory._id, creator, title, message, tags, image }));

            setCreator('');
            setTitle('');
            setMessage('');
            setTags('');
            setImage('');
        } else{
            dispatch(createMemory({ creator, title, message, tags, image }));
            dispatch(listMemories());

            setCreator('');
            setTitle('');
            setMessage('');
            setTags('');
            setImage('');
        }
    }

    const handleClear = () => {
        setCreator('');
        setTitle('');
        setMessage('');
        setTags('');
        dispatch({ type: MEMORY_FETCH_RESET });
    }
    
    return (
        <Container onSubmit={handleSubmit}>
            <h3>Creating a Memory</h3>
            <TextField size="small" margin="dense" value={creator} placeholder="Creator" label="Creator" variant="outlined" onChange={e => setCreator(e.target.value)} required />
            <TextField size="small" margin="dense" value={title} placeholder="Title" label="Title" variant="outlined" onChange={e => setTitle(e.target.value)} required />
            <TextField rows="3" margin="dense" value={message} label="Message" placeholder="Message" multiline variant="outlined" onChange={e => setMessage(e.target.value)} required />
            <TextField size="small" margin="dense" value={tags} placeholder="Tags (comma seperated)" label="Tags" variant="outlined" onChange={e => setTags(e.target.value)} required />
            {fileError && <p>{fileError}</p>}
            <input type="file" onChange={uploadFileHandler} />
            <Button type="submit" style={{ margin: '5px 0' }} variant="contained" color="primary">submit</Button>
            <Button onClick={handleClear} style={{ margin: '5px 0' }} variant="contained" color="secondary">clear</Button>
        </Container>
    )
}

export default CreateAndUpdate;
