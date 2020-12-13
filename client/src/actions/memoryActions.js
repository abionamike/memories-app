import axios from 'axios';
import * as actions from '../constants/memoryConstants';

const listMemories = () => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_LIST_REQUEST });

        const { data } = await axios.get('/api/memories');
        dispatch({ type: actions.MEMORY_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actions.MEMORY_LIST_FAIL, payload: error.message });
    }
}

const createMemory = (memory) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_CREATE_REQUEST });

        await axios.post('/api/memories', memory);
        dispatch({ type: actions.MEMORY_CREATE_SUCCESS });

    } catch (error) {
        dispatch({ type: actions.MEMORY_CREATE_FAIL, payload: error.message });
    }
}

const deleteMemory = (id) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_DELETE_REQUEST });

        await axios.delete(`/api/memories/${id}`);
        dispatch({ type: actions.MEMORY_DELETE_SUCCESS });

    } catch (error) {
        dispatch({ type: actions.MEMORY_DELETE_FAIL, payload: error.message });
    }
}

const updateMemory = (id, memory) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_UPDATE_REQUEST });

        await axios.put(`/api/memories/${id}`, memory);
        dispatch({ type: actions.MEMORY_UPDATE_SUCCESS });

    } catch (error) {
        dispatch({ type: actions.MEMORY_UPDATE_FAIL, payload: error.message });
    }
}

export { listMemories, createMemory, deleteMemory, updateMemory };