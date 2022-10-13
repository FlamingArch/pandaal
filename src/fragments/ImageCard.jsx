import React from "react";
import Firebase from "../contexts/Firebase";

function ImageCard({ src }) {
  const firebase = React.useContext(Firebase.Context);

  return (
    <img
      src={src}
      onClick={firebase.signOut}
      className="aspect-[9/12] w-[192px] rounded-3xl shadow-2xl"
    />
  );
}

export default ImageCard;
