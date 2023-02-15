import { useFetchAlbumsQuery } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {
    // const results = useFetchAlbumsQuery(user);
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    // console.log(data, error, isLoading);
    // console.log(results);

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
        </div>
        <div>
            {content}
        </div>
    </div>
}
export default AlbumsList;