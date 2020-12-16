import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { memoryListReducer, memoryCreateReducer, memoryUpdateReducer, memoryFetchReducer, memoryDeleteReducer } from './reducers/memoryReducer';

const reducer = combineReducers({
    memoryList: memoryListReducer,
    memoryCreate: memoryCreateReducer,
    memoryUpdate: memoryUpdateReducer,
    memoryFetch: memoryFetchReducer,
    memoryDelete: memoryDeleteReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

