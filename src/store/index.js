// 创建一个store管理仓库，从redux库中引入一个createStore函数和applyMiddleware方法
import { createStore, applyMiddleware } from 'redux';
// 引入thunk中间件，实现异步action、打印日志、错误报告等功能，放入applyMiddleware方法之中
import thunk from 'redux-thunk';