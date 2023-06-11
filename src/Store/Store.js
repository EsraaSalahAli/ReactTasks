import { applyMiddleware,createStore } from "redux";
import CombineRed from "./Reducers/CombineRed";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(CombineRed,composeWithDevTools(applyMiddleware(thunk)));

export default store;