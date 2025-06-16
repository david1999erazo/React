import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {

    //New custom hook
    const { images, isLoading } = useFetchGifts(category);

    //Sin custom hooks
    //const [images, setImages] = useState([]);
    //const getImages = async () => {
    //    const newImages = await getGifs({category});
    //    setImages(newImages)
    //}

    //useEffect( () => {
    //    getImages();
    //}, [])


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                ? ( <h2>Cargando...</h2> )
                : null
            }
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}