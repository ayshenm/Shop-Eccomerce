import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { addToBasket, calculteBasket } from "../redux/slices/basketSlice";
import { Alert } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  console.log("gg", products);
  const dispatch = useDispatch();
  const { title, price, image, description } = selectedProduct;
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const incriment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const addBasket = () => {
    console.log("dikk");
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculteBasket());
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false); // 3 saniyə sonra alert-i gizlət
    }, 3000);
  };

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
          <button
            onClick={addBasket}
            disabled={count === 0}
            className={`cursor-pointer border rounded-2xl px-2 py-3 transition-all duration-150 text-white font-bold
             ${count === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-900 hover:bg-red-500"}
            `}>
            Add to Bascket
          </button>
        </div>
      </div>
      {showAlert && (
        <Alert variant="outlined" severity="success" className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-1/3">
          Məhsul səbətə əlavə edildi! 🎉
        </Alert>
      )}
    </div>
  );
};

export default ProductDetails;
