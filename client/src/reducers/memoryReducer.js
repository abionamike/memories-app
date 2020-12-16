import * as actions from '../constants/memoryConstants';

export const memoryListReducer = (state = { memories: [] }, action) => {
    switch (action.type) {
        case actions.MEMORY_LIST_REQUEST:
            return { loading: true };
        case actions.MEMORY_LIST_SUCCESS:
            return { loading: false, memories: action.payload };
        case actions.MEMORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const memoryCreateReducer = (state = { memories: [] }, action) => {
    switch (action.type) {
        case actions.MEMORY_CREATE_REQUEST:
            return { loading: true };
        case actions.MEMORY_CREATE_SUCCESS:
            return { loading: false };
        case actions.MEMORY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const memoryFetchReducer = (state = { }, action) => {
    switch (action.type) {
        case actions.MEMORY_FETCH_REQUEST:
            return { loading: true };
        case actions.MEMORY_FETCH_SUCCESS:
            return { loading: false, memory: action.payload };
        case actions.MEMORY_FETCH_FAIL:
            return { loading: false, error: action.payload };
        case actions.MEMORY_FETCH_RESET:
            return { };
        default:
            return state;
    }
}

export const memoryUpdateReducer = (state = { memories: [] }, action) => {
    switch (action.type) {
        case actions.MEMORY_UPDATE_REQUEST:
            return { loading: true };
        case actions.MEMORY_UPDATE_SUCCESS:
            return { loading: false };
        case actions.MEMORY_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const memoryDeleteReducer = (state = { memories: [] }, action) => {
    switch (action.type) {
        case actions.MEMORY_DELETE_REQUEST:
            return { loading: true };
        case actions.MEMORY_DELETE_SUCCESS:
            return { loading: false };
        case actions.MEMORY_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

