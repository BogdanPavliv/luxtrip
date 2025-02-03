import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './headerSlice';
import modalReducer from './modalSlice';

const store = configureStore({
    reducer: {
        header: headerReducer,
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;