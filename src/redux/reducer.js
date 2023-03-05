// import { createReducer } from "@reduxjs/toolkit";

// export const cartReducer = createReducer(
//   {
//     cartItems: [],
//     subTotal: 0,
//     shipping: 0,
//     tax: 0,
//     total: 0,
//   },
//   { addTocart: (state, action) => {
//     const item = action.payload;
//     const isItemExit = state.cartItems.find((i)=>{i.id === item.id});

//     if(isItemExit){
//         state.cartItems.forEach((i)=>{
//             if(i.id === item.id)
//             i.qty +=1;
//         })
//     }else{
//         state.cartItems.push(item)
//     }
//   } 
// }
// );
