import { configuration, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
reducer: {
cart : cartSlice,//learn
},
});


export default store;