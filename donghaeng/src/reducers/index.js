import { combineReducers } from "redux";
import {data} from "./data";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";


const rootReducer = combineReducers({
    data
});

const persisConfig ={
    key:'root',
    storage
}

const persistReduce = persistReducer( persisConfig, rootReducer);

export default persistReduce;