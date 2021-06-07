import { createReducer, } from '@reduxjs/toolkit';
import { addtocart } from './action';

 export const cartreducer = createReducer( 0,{
     [addtocart]: ( state) => {
         console.log(state);
         return state + 1;
     }
})