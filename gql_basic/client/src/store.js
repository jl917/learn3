import { createStore, combineReducers } from 'redux';
import { countReducer } from './pages/page1/redux';

const app = combineReducers({
  count: countReducer,
});

export default createStore(app);
