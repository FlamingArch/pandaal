const ImageTile = ({ src }) => {
  return (
    <div className="max-w-[300px] w-1/2 mx-auto aspect-[9/12] rounded-3xl overflow-hidden">
      <img src={src} className="w-full h-full shadow-lg" />
    </div>
  );
};

export default ImageTile;
