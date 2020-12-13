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

export const memoryUpdateReducer = (state = { memories: [] }, action) => {
    switch (action.type) {
        case actions.MEMORY_LIST_REQUEST:
            return { loading: true };
        case actions.MEMORY_LIST_SUCCESS:
            return { loading: false };
        case actions.MEMORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const memoryDeleteReducer = (state = { memories: [] }, action) => {
    switch (action.type) {
        case actions.MEMORY_LIST_REQUEST:
            return { loading: true };
        case actions.MEMORY_LIST_SUCCESS:
            return { loading: false };
        case actions.MEMORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

