import { createSlice } from "@reduxjs/toolkit";


type TUiState ={
    cartInvisible: boolean
}

const uiInitiateState: TUiState = {
    cartInvisible: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitiateState,
    reducers: {
        toggle: (state) => {
            state.cartInvisible = !state.cartInvisible
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice;