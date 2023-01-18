import React, { useEffect, } from "react";
import { useDispatch } from 'react-redux';

export const useFetching = (someFetchActionCreator: any, debendency?: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(someFetchActionCreator);

    }, [debendency && debendency])
}

