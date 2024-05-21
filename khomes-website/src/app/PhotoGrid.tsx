
const photos = [
  { id: 1, src: '/images/realestate_bedroom01.jpg' },
  { id: 2, src: '/images/realestate_bedroom02.jpg' },
  { id: 3, src: '/images/realestate_bedroom03.jpg' },
  { id: 4, src: '/images/realestate_bedroom04.jpg' },
  { id: 5, src: '/images/realestate_diningroom01.jpg' },
  { id: 6, src: '/images/realestate_diningroom02.jpg' }
];

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className= "photo"
          style={{ backgroundImage: `url(${photo.src})` }}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;