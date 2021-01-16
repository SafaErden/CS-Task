import { combineReducers } from 'redux';
import { bidReducer } from './bidReducer';

const rootReducer = combineReducers({
    bidReducer,
});

export default rootReducer;
