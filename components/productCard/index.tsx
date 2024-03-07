import Image from "next/image";
import React from "react";

const ProductCard = ({
  name,
  price,
  size,
  image,
}: {
  name: string;
  price: number;
  size: string;
  image: string;
}) => {
  return (
    <div className="w-full relative min-h-[560px] h-[560px]">
      <div className="w-full shadow-[#00000055] shadow-card flex flex-col items-start px-8 my-4 z-10 absolute">
        <Image
          src={image}
          alt="steroids"
          height={250}
          width={221.42}
          className="object-contain mx-auto mb-4 mix-blend-multiply	w-auto h-[250px]"
        />
        <h4 className="text-2xl font-bold text-primary mb-4">Meditech</h4>
        <h3 className="text-xl font-bold text-red-400 mb-4">{price} USD</h3>
        <h4 className="text-2xl font-normal text-black mb-1">{name}</h4>
        <p className="text-lg text-gray-700 font-light  mb-4">{size}</p>
        <button className="mx-auto bg-primary border-solid border hover:bg-white hover:text-primary active:bg-white active:text-primary border-white rounded-sm px-8 py-3 text-white text-2xl my-4">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
