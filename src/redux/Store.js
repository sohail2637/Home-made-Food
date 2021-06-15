import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  addtocart
} from "./reducers/reducers";
  // shippinconfigureStoregreducer,
  // loginuser,
// import { addtocart } from "./reducers/reducers";

const Store = configureStore({
// combineReducers({

    reducer: {
      counter: addtocart
    
    },
  // })
  
});
export default Store 