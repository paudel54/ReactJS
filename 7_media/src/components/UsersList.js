import { useEffect } from 'react';
// useDispatch to run the thunk fn
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store';

function UsersList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return 'Users List';
}

export default UsersList;