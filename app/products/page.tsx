import ProductCard from "@/components/productCard";
import React from "react";
import { products } from "./products";

const Products = () => {
  return (
    <div className="min-h-screen w-full">
      <h1 className="text-4xl font-bold text-primary my-8 mx-auto text-center px-2">
        Our Products
      </h1>
      {products.map(({ concentration, molecule, price, image }, index) => (
        <ProductCard
          name={molecule}
          size={concentration}
          price={price}
          image={image}
          key={index}
        />
      ))}
    </div>
  );
};

export default Products;
