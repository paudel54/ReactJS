import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
    // const results = useFetchAlbumsQuery(user);
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    // useFetchAlbumsQuery(user);
    // console.log(data, error, isLoading);
    // console.log(results);
    // addlbum contains fn where results contains obj, as mutation returns fn and obj
    const [addAlbum, results] = useAddAlbumMutation();
    const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();
    // console.log(results);

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if (error) {
        content = <div> Error Loading Albums.</div>
    } else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album} />
        });
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">  Albums For {user.name} </h3>

            <Button loading={results.isLoading} onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}
export default AlbumsList;