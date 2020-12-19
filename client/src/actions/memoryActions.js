import axios from 'axios';
import * as actions from '../constants/memoryConstants';

const listMemories = () => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_LIST_REQUEST });
        const { data } = await axios.get('https://my-memories-appx.herokuapp.com/api/memories');
        dispatch({ type: actions.MEMORY_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actions.MEMORY_LIST_FAIL, payload: error.message });
    }
}

const createMemory = (memory) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_CREATE_REQUEST });

        await axios.post('https://my-memories-appx.herokuapp.com/api/memories', memory);
        dispatch({ type: actions.MEMORY_CREATE_SUCCESS });

    } catch (error) {
        dispatch({ type: actions.MEMORY_CREATE_FAIL, payload: error.message });
    }
}

const deleteMemory = (id) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_DELETE_REQUEST });

        await axios.delete(`https://my-memories-appx.herokuapp.com/api/memories/${id}`);
        dispatch({ type: actions.MEMORY_DELETE_SUCCESS });

    } catch (error) {
        dispatch({ type: actions.MEMORY_DELETE_FAIL, payload: error.message });
    }
}

const updateMemory = (memory) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_UPDATE_REQUEST });

        await axios.put(`https://my-memories-appx.herokuapp.com/api/memories/update/${memory._id}`, memory);
        dispatch({ type: actions.MEMORY_UPDATE_SUCCESS });

        dispatch(listMemories());
    } catch (error) {
        dispatch({ type: actions.MEMORY_UPDATE_FAIL, payload: error.message });
    }
}

const fetchDataForUpdate = (memory) => (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_FETCH_REQUEST });

        dispatch({ type: actions.MEMORY_FETCH_SUCCESS, payload: memory });

    } catch (error) {
        dispatch({ type: actions.MEMORY_FETCH_FAIL, payload: error.message });
    }
}

const increaseLike = (like) => async (dispatch) => {
    try {
        dispatch({ type: actions.MEMORY_LIKE_REQUEST });

        const { data } = await axios.put(`https://my-memories-appx.herokuapp.com/api/memories/${like.id}`, like);
        dispatch({ type: actions.MEMORY_LIKE_SUCCESS, payload: data });

        dispatch(listMemories());
    } catch (error) {
        dispatch({ type: actions.MEMORY_LIKE_FAIL, payload: error.message });
    }
}

export { listMemories, createMemory, deleteMemory, updateMemory, fetchDataForUpdate, increaseLike };