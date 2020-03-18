import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./Reducers/AddToCart";
export let store = createStore(Reducers, applyMiddleware(thunk));
