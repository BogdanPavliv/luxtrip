import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
    isModalOpen: boolean;
}

const initialState: HeaderState = {
    isModalOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
          state.isModalOpen = true;
        },
        closeModal: (state) => {
          state.isModalOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;