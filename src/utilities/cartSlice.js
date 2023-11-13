import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //items: ["burger", "pizza"],
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            //Vanialla(Older) Redux => DON'T MUTATE THE STATE, returing was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //Redux Toolkit
            //We HAVE to mutate the state

            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
        }

    }
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;