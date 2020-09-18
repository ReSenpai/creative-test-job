import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import apartamentsReducer from "./apartaments_reducer";


const rootReducer = combineReducers({
   apartamentsPage: apartamentsReducer
});


const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware));

export default store;