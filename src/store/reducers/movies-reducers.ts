import { createSlice, } from '@reduxjs/toolkit';
import { movieInfoAction, moviesLisAction } from '../actions';

interface movieStateProps {
    moviesList: [];
    movieInfo: any;
    loader: boolean;
}

const initialState: movieStateProps = {
    moviesList: [],
    movieInfo: {},
    loader: false,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},

    extraReducers: builder => {

        builder.addCase(moviesLisAction.pending, (state,) => {
            state.loader = true;
        });

        builder.addCase(moviesLisAction.fulfilled, (state, action) => {
            state.moviesList = action.payload;
            state.loader = false;
        });

        builder.addCase(moviesLisAction.rejected, (state,) => {
            state.loader = false;
            state.moviesList = []
        });

        builder.addCase(movieInfoAction.fulfilled, (state, action) => {
            state.movieInfo = action.payload;
        });
    },
});

export default moviesSlice.reducer;
export const { } = moviesSlice.actions;

