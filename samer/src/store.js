import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { countReducer1 } from './pages/page1/redux';
import { countReducer2 } from './pages/page2/redux';
import { todoList, itodoList } from './pages/page4/redux';
import { sagaCounter } from './pages/page6/redux';
import { btnLoading, userDatas } from './pages/page7/redux';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const app = combineReducers({
  count1: countReducer1,
  count2: countReducer2,
  todoList,
  itodoList,
  sagaCounter,
  btnLoading,
  userDatas,
});

const store = createStore(app, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
