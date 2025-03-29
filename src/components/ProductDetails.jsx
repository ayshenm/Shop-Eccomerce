import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  console.log("gg", products);

  const { title, price, image, description } = selectedProduct;

  const [count, setCount] = useState(0);
  const incriment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="mt-10 flex justify-between items-center gap-5 p-3 rounded-3xl border-2 border-gray-600 shadow-lg">
      <div className="flex justify-center items-center w-50 h-full mb-2">
        <img className="w-full h-full object-fill rounded-md" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between text-left gap-y-0.5">
        <h2 className="text-lg text-gray-800 font-bold">{title}</h2>
        <p className="text-sm  text-gray-500 mb-4">{description}</p>
        <p className="text-lg font-bold text-red-600">Price: {price}₼</p>
        <div className="flex justify-between items-center gap-2 cursor-pointer py-3">
          <div className="flex gap-2">
            <CiCirclePlus onClick={() => incriment()} size={25} />
            {count} <CiCircleMinus onClick={() => decrement()} size={25} />
          </div>
          <button className="cursor-pointer border rounded-2xl px-2 py-3 bg-red-900 hover:bg-red-500 transition-all duration-150 text-white font-bold ">
            Add to Bascket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
