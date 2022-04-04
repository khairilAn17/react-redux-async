import { createSlice } from "@reduxjs/toolkit";


type TUiState ={
    cartInvisible: boolean,
    notification: {
        status: string;
        title: string;
        message: string;

    } | null;
}

const uiInitiateState: TUiState = {
    cartInvisible: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitiateState,
    reducers: {
        toggle: (state) => {
            state.cartInvisible = !state.cartInvisible
        },
        showNotification: (state, action) => {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message}
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice;