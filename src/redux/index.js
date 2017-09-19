import { createStore } from "redux";
import reducer from "./reducer";
import DevTools from "../components/DevTools";

const initialState = {}

export default createStore(reducer, initialState, DevTools.instrument());
export * from "./actions";
