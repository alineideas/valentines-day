import React from 'react';
import { Photo } from '../memories.ts';
import './PhotoGallery.css';

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <figure key={index} className="photo-card">
          <img src={photo.src} alt={photo.caption} />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PhotoGallery;
