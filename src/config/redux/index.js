import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './globalReducer';

export const globalStore = createStore(globalReducer, applyMiddleware(thunk));