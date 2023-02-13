import { useEffect } from 'react';
// useDispatch to run the thunk fn
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skeletion from './Skeleton';

function UsersList() {
    const dispatch = useDispatch();

    // useSelector() ​ Allows you to extract data from the Redux store state, using a selector function.
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
        // {data:[], isLoading:false, error:null}
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        // return <div>Loading......</div>
        return <Skeletion times={6} className="h-10 w-full" />;
    }
    if (error) {
        return <div>Error fetching data...</div>
    }

    return <div>{data.length}</div>
}

export default UsersList;