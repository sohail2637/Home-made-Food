import { createReducer } from "@reduxjs/toolkit";
import { addtocart as addNewToCart, loginaction, shippingdata ,sellerpost } from "./action";
const cartInitailState = {
  cartitem: 0,
  cartitemId: [],
};
export const addtocart = createReducer(0, {
  [addNewToCart]: (state, action) => {
    const data = action.payload;
    return data;
  },
});

export const foodPost = createReducer({},
  {
    [sellerpost]: (state, action) => {
      const data = action.payload;
      console.log(data);
      // return data;
    }
  });


// export const shippingreducer = createReducer(
//   {},
//   {
//     [shippingdata]: (satste) => satste,
//   }
// );
// export const loginuser = createReducer(
//   {},
//     {
//         [loginaction]: (state) => state
//   }
// );

// ......................................code end...........................

// import { createReducer } from "@reduxjs/toolkit";
// import { addtocart as addNewToCart, loginaction, shippingdata } from "./action";

// export const addtocart = createReducer(
//   const initialdata= {
//     cartitem: 0,
//     cartitemId:[],
//   },

//  export default (state = initialdata, action) => {
//   const {type, payload} = action;

//   switch (type) {
//     case addNewToCart:
//       return {
//         ...state,
//         cartitem: cartitem + payload
//       };
//     // const data = { ...state, cartitem: cartitemId + payload };

//     default:
//       return state
//   }

// }

// export const shippingreducer = createReducer(
//   {},
//   {
//     [shippingdata]: (satste) => satste,
//   }
// );
// export const loginuser = createReducer(
//   {},
//     {
//         [loginaction]: (state) => state
//   }
// );
