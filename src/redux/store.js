import {  legacy_createStore as createStore, applyMiddleware } from "redux";
// PointsReducer
import { pointsReducer } from "./pointsReducer/pointsReducer";

//thunk
import thunk from "redux-thunk";

const store = createStore(pointsReducer, applyMiddleware(thunk));


export default store;