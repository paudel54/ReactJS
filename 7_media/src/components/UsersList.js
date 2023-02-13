import { useEffect, useState } from 'react';
// useDispatch to run the thunk fn
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeletion from './Skeleton';

function UsersList() {
    // if it's true show skeleton user comp. by default it's kept false
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // if we get error update the peice of state
    const [loadingUsersError, setloadingUsersError] = useState(null);

    const [isCreatingUser, setIsCreatingUser] = useState(false);

    const [creatingUserError, setCreatingUserError] = useState(null);



    const dispatch = useDispatch();

    // useSelector() ​ Allows you to extract data from the Redux store state, using a selector function.
    const { data } = useSelector((state) => {
        return state.users;
        // {data:[], isLoading:false, error:null}
    });

    useEffect(() => {
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            // .then(() => {
            //     // console.log('SUCCESS')
            //     // setIsLoadingUsers(false);
            // })
            .catch((err) => {
                // console.log('Fail!!!');
                setloadingUsersError(err);
                // setIsLoadingUsers(false);
            })
            .finally(() => {
                setIsLoadingUsers(false);
            });
    }, [dispatch]);

    const handleUserAdd = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch(err => setCreatingUserError(err))
            .finally(() => setIsCreatingUser(false))
    };


    if (isLoadingUsers) {
        // return <div>Loading......</div>
        return <Skeletion times={6} className="h-10 w-full" />;
    }
    if (loadingUsersError) {
        return <div>Error fetching data...</div>
    }

    const renderedUsers = data.map((user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                {user.name}
            </div>
        </div>
    });

    return <div>
        <div className='flex flex-row justify-between m-3'>
            <h1 className='m-2 text-xl'>Users</h1>
            {
                isCreatingUser ? 'Creating User...' :
                    <Button onClick={handleUserAdd}>
                        + Add User
                    </Button>
            }
            {creatingUserError && 'Error Creating User.....'}
        </div>
        {renderedUsers}
    </div>
}

export default UsersList; 