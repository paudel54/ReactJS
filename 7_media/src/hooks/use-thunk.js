import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// thunk fn as arg that we eventually run and dispatch
export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    // fn that runs thunk and dispatch it and update loading state and error state along the way
    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);
    return [runThunk, isLoading, error];
}
