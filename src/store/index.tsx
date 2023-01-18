import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './reducers/movies-reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';



export const store = configureStore({
    reducer: {
        movies: moviesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),

});

export type dispatchAction = typeof store.dispatch;
export type stateSelector = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<stateSelector> = useSelector;

