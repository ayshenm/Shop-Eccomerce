import React from "react";

const Product = ({ product }) => {
  console.log("Məhsul məlumatı:", product);

  const { id, price, image, title } = product;

  return (
    <div
      id={id}
      className="flex flex-col items-center p-4 border border-amber-50 rounded-lg shadow-lg w-70 h-90 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-300">
      <div className="flex justify-center items-center w-40 h-40 mb-2">
        <img className="w-full h-full object-fill rounded-md" src={image} alt={title} />
      </div>

      <div className="text-center flex flex-col justify-between h-50">
        <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
        {/* <p className="text-sm text-gray-500 mb-4">{description}</p> */}
        <p className=" text-lg font-bold text-gray-700">Price: {price}₼</p>
      </div>
      <div className="bg-red-500 justify-start cursor-pointer rounded-full text-white px-3 py-2">
        <button className="cursor-pointer h-1.5">Show More</button>
      </div>
    </div>
  );
};

export default Product;
