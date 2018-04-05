import { combineReducers } from 'redux';
import * as sampleReducer from './sampleReducer';

export default combineReducers(Object.assign(sampleReducer));
