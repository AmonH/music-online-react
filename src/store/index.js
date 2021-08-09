import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


//redux devtools使用需在chrome浏览器安装redux devtools的插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer,enhancer);

export default store;