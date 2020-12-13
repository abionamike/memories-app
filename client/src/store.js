import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { memoryListReducer, memoryCreateReducer, memoryUpdateReducer, memoryDeleteReducer } from './reducers/memoryReducer';

const reducer = combineReducers({
    memoryList: memoryListReducer,
    memoryCreate: memoryCreateReducer,
    memoryUpdate: memoryUpdateReducer,
    memoryDelete: memoryDeleteReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

