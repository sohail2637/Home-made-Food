import { configureStore } from '@reduxjs/toolkit';
import { cartreducer } from "./reducers/reducers";

const Store = configureStore({
    reducer: {
        cartItem: cartreducer,
    }
})
export default Store