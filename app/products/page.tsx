import ProductCard from "@/components/productCard";
import React from "react";

const Products = () => {
  return (
    <div className="min-h-screen w-full">
      <h1 className="text-4xl font-bold text-primary my-8 mx-auto text-center px-2">
        Our Products
      </h1>
      {[...Array(10)].map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

export default Products;
