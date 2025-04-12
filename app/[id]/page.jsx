"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const ImageView = ({ params }) => {
  const { id } = React.use(params);
  return (
    <div>
      <CldImage
        width="960"
        height="600"
        src={id}
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
};

export default ImageView;
