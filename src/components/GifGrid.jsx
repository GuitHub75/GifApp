import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
    const { images: fetchedImages, isLoading } = useFetchGifs(category);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(fetchedImages);
    }, [fetchedImages]);

    const handleDelete = (id) => {
        setImages(images.filter(img => img.id !== id));
    };

    return (
        <>
            <h2>{category}</h2>
            {isLoading && <h2>Loading...</h2>}
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} onDelete={handleDelete} />
                ))}
            </div>
        </>
    );
};
