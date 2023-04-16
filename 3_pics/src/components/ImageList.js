import ImageShow from './ImageShow'
//adding css file to style image list
import './ImageList.css'


function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });

    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;


