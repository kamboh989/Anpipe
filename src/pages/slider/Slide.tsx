import React from "react";

interface SlideProps {
  imageUrl: string;
  zIndex: number;
}

const Slide: React.FC<SlideProps> = ({ imageUrl, zIndex }) => {
  return (
    <div
      className="w-full h-screen sticky top-0"
      style={{
        zIndex: zIndex,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Slide;
