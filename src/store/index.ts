// 创建一个store管理仓库，从redux库中引入一个createStore函数和applyMiddleware方法
import { legacy_createStore } from 'redux';
import reducer from './reducer';

//创建仓库
//让浏览器看到__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

export default store