import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  name,
  price,
  size,
  image,
  id,
}: {
  name: string;
  price: number;
  size: string;
  image: string;
  id: number;
}) => {
  return (
    <div className="w-full relative ">
      <div className="w-full shadow-[#00000055] shadow-card flex flex-col items-start px-8 my-6 z-10">
        <Image
          src={image}
          alt="steroids"
          height={250}
          width={221.42}
          className="object-contain mx-auto mb-4 mix-blend-multiply	w-auto h-[250px] "
        />
        <h4 className="text-2xl font-bold text-primary mb-4">Meditech</h4>
        <h3 className="text-xl font-bold text-red-400 mb-4">{price} USD</h3>
        <h4 className="text-lg font-normal text-black mb-1">
          {name.split("<br/>").map((string, index) => {
            return (
              <span key={index} className="block">
                {string}
                {index !== 0 && <br />}
              </span>
            );
          })}
        </h4>
        <p className="text-lg text-gray-700 font-light  mb-4">{size}</p>
        <Link
          href={`/products/${id}`}
          className="mx-auto bg-primary border-solid border hover:bg-white hover:text-primary active:bg-white active:text-primary border-white rounded-sm px-8 py-3 text-white text-2xl my-4"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
