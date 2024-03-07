import { NextPage } from "next";
import React from "react";
import { products } from "../products";
import Link from "next/link";
import Image from "next/image";

const Product = ({ params }: { params: any }) => {
  console.log(params);
  const selectedProduct = products.find(
    (product) => product.id === Number(params.id)
  );
  if (!selectedProduct) {
    return <h1 className="min-h-screen py-auto">Product not found</h1>;
  }
  return (
    <div className="w-full p-4">
      <Link href="/products" className="my-4">
        {"<"} Back
      </Link>
      <div className="w-full flex flex-col items-start">
        <Image
          src={selectedProduct.image}
          alt="steroids"
          width={265}
          height={300}
          className="object-contain mx-auto mb-4 mix-blend-multiply	w-auto h-[300px]"
        />
        <h3 className="text-3xl font-extrabold text-red-600 mb-4">
          {selectedProduct.price} USD
        </h3>
        <p className="text-lg font-bold text-black mb-4">
          <span className="font-bold inline">Manufacturer: </span>
          Meditech
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <span className="font-bold inline">Form: </span>
          {selectedProduct.form}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <span className="font-bold inline">Molecule: </span>
          {selectedProduct.molecule.split("<br/>").map((string, index) => {
            return (
              <span key={index} className="inline-block">
                {string}
                {index !== 0 && <br />}
              </span>
            );
          })}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <span className="font-bold inline">Concentration: </span>{" "}
          {selectedProduct.concentration}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <span className="font-bold inline">Volume: </span>
          {selectedProduct.volume}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <span className="font-bold inline">Recommended Dosage: </span>
          {selectedProduct.recommendedDosage}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <span className="font-bold inline">Description: </span>

          {selectedProduct.productDescription
            .split("<br/>")
            .map((string, index) => {
              return (
                <span key={index} className="block text-gray-900">
                  {string}
                  {index !== 0 && <br />}
                </span>
              );
            })}
        </p>
      </div>
      <div className="flex justify-between">
        <Link
          href={`/products/${
            selectedProduct.id - 1 ? selectedProduct.id - 1 : 1
          }`}
          className={`${
            selectedProduct.id - 1 === 0
              ? "bg-gray-300  border-gray-300 pointer-events-none"
              : "bg-white border-primary"
          } border-solid border hover:bg-primary hover:text-white active:bg-primary active:text-white rounded-sm px-8 py-3 text-primary text-2xl my-4`}
          aria-disabled={selectedProduct.id - 1 === 0}
          tabIndex={selectedProduct.id - 1 === 0 ? -1 : undefined}
        >
          Previous
        </Link>
        <Link
          aria-disabled={selectedProduct.id + 1 > products.length}
          tabIndex={selectedProduct.id + 1 > products.length ? -1 : undefined}
          href={`/products/${
            selectedProduct.id + 1 > products.length
              ? products.length
              : selectedProduct.id + 1
          }`}
          className={`${
            selectedProduct.id + 1 > products.length
              ? "bg-gray-300 border-gray-300 pointer-events-none"
              : "bg-white border-primary"
          } border-solid border hover:bg-primary hover:text-white active:bg-primary active:text-white  rounded-sm px-8 py-3 text-primary text-2xl my-4`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Product;
