import { useEffect } from 'react';
// useDispatch to run the thunk fn
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeletion from './Skeleton';
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';

function UsersList() {

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [creatingUserError, setCreatingUserError] = useState(null);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    // const dispatch = useDispatch();

    // useSelector() ​ Allows you to extract data from the Redux store state, using a selector function.
    const { data } = useSelector((state) => {
        return state.users;
        // {data:[], isLoading:false, error:null}
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        // setIsCreatingUser(true);
        // dispatch(addUser())
        //     .unwrap()
        //     .catch(err => setCreatingUserError(err))
        //     .finally(() => setIsCreatingUser(false))
        doCreateUser();
    };

    let content;

    if (isLoadingUsers) {
        // return <div>Loading......</div>
        content = <Skeletion times={6} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        return <div>Error fetching data...</div>
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        });
    }

    return <div>
        <div className='flex flex-row justify-between items-center m-3'>
            <h1 className='m-2 text-xl'>Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>
                + Add User
            </Button>
            {creatingUserError && 'Error Creating User.....'}
        </div>
        {content}
    </div>
}

export default UsersList; 