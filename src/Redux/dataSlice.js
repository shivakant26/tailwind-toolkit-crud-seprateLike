import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[],
    editData:""
}


const dataSlice = createSlice({
    name:"wishlist",
    initialState:initialState,
    reducers:{
        addWish: (state, action) => {
            let object = action.payload
            state.editData = ""
            state.data.push(object);
        },
        editWish: (state, action) => {
            let id = action.payload;
            state.editData = state?.data[id]
        },
        updateWish: (state, action) => {
            let object = action.payload.object;
            let updateId = parseInt(action.payload.id)
            state.data.splice(updateId,1,object)
        },
        deleteWish: (state, action) => {
            state.data.splice(action.payload,1)
        },
    }
})

export const { addWish , editWish , updateWish , deleteWish} = dataSlice.actions;

export default dataSlice.reducer;