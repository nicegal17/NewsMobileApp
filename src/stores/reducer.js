import {combineReducers} from 'redux';
import {mediasReducer} from './slices/mediaSlice';

const rootReducer = combineReducers({
  medias: mediasReducer,
});

export default rootReducer;
