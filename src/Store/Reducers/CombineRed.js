import { combineReducers } from "redux";
import FavReducer from "./FavReducer";
import loaderReducer from "./LoaderRed";
import MoviesRed from "./MoviesRed";


export default combineReducers({
    FavRed: FavReducer,
    LoaderRed: loaderReducer,
    MovRed: MoviesRed
})


// more reducers --> file --> switch 