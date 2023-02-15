import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {
    // const results = useFetchAlbumsQuery(user);
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    // useFetchAlbumsQuery(user);
    // console.log(data, error, isLoading);
    // console.log(results);
    // addlbum contains fn where results contains obj, as mutation returns fn and obj
    const [addAlbum, results] = useAddAlbumMutation();
    // console.log(results);

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton times={3} />
    } else if (error) {
        content = <div> Error Loading Albums.</div>
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>;
            return <ExpandablePanel key={album.id} header={header}>
                List of Photos in the album
            </ExpandablePanel>
        });
    }

    return <div>
        <div>
            Albums For {user.name}
            <Button onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}
export default AlbumsList;