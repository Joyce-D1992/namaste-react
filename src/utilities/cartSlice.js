import { createSlice, current } from "@reduxjs/toolkit";

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
        //originalState = { items: ["pizza"] }
        clearCart: (state) => {
           // state = ["joyce"]; // not mutating the state just adding reference to it

        //    console.log(state); // ["pizza"]
        //    console.log(current(state)); // reading state
        //    state = []; // local copy of state not updating the originalState
        //    console.log(state);

        // RTK - either mutate the existing state or return a new state

          //state.items.length = 0; //originalState = []

           return { items: [] }; // This new object will be replaced inside originalState = { items: [] }
        }

    }
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;