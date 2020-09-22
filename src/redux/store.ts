import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import apartamentsReducer from "./apartaments_reducer";


const rootReducer = combineReducers({
   apartamentsPage: apartamentsReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware));

export default store;