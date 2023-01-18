import { movieInfoApi, movieListApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const moviesLisAction = createAsyncThunk('moviesList', async () => {

    try {
        const data = await movieListApi()
        if (data) {
            return data?.results;
        }
    } catch (error: any) {
        console.log(error);
    }
});

export const movieInfoAction = createAsyncThunk('listMovieInfoById',
    async (id: number) => {
        try {
            const data = await movieInfoApi(id);
            if (data) {
                return data;
            }
        } catch (error: any) {
            console.log(error);
        }
    },
);
