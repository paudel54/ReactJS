import { useFetchPhotosQuery } from "../store";


function PhotosList({ album }) {
    // on mutation requires album
    useFetchPhotosQuery(album);
    return 'PhotosListss'
}

export default PhotosList;