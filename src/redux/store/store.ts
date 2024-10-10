import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import watchChangeColor from "../redux";
import reducer from "./reducer";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchChangeColor);

export default store;
