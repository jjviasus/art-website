import React, {useEffect, useState} from 'react';
import {Blurhash} from "react-blurhash";
import {PaintingData} from "../data/paintingData";
import '../styles/ImageComponent.css';

interface ImageComponentProps {
    image: PaintingData;
}

function ImageComponent({image}: ImageComponentProps) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div>
            {!imageLoaded && (
                <Blurhash
                    className="blurhash-placeholder"
                    hash={image.blurhash}
                    width={300} // This is fixed and needs to be changed
                    height={300} // This is fixed and needs to be changed
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
            <img
                src={image.src}
                alt={image.alt}
                style={{display: !imageLoaded ? 'none' : 'inline'}}
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    )
}

export default ImageComponent;