import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        addToCart: (state,action)=>{
            const findProduct = state.find((p)=> p._id === action.payload._id)
            if(findProduct){
                findProduct.quantity += 1
                toast.warn("تمت إضافة وحدة إضافية من المنتج بنجاح")
            }else{
                const Add = { ...action.payload , quantity: 1 } 
                state.push(Add)
                toast.success("تمت إضافة المنتج بنجاح إلى السلة.")
            }
        },
        deleteToCart : (state,action)=>{
            return state.filter((p)=> p._id != action.payload._id)
        },
        decrementQuantity: (state, action) => {
              const product = state.find((p) => p._id === action.payload._id);
              if (product && product.quantity > 1) {
                  product.quantity -= 1;
              }
        },
        incrementQuantity: (state, action) => {
              const product = state.find((p) => p._id === action.payload._id);
              if (product) {
                  product.quantity += 1;
              }
        }
    }
})

export const { addToCart, deleteToCart, decrementQuantity, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
