import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.basket);

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      if (newTheme) {
        root.style.backgroundColor = "#000";
        root.style.color = "#fff";
      } else {
        root.style.backgroundColor = "#fff";
        root.style.color = "#000";
      }
      return newTheme;
    });
  };

  return (
   
    <div className="flex justify-between items-center p-4 md:p-5 shadow-md dark:bg-gray-900 transition-all mb-10">
      {/* Logo */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2 p-2 cursor-pointer">
        {/* <img className="w-8 h-8 md:w-10 md:h-10" src="./src/images/logo.png" alt="header_logo" /> */}
        <p className="font-bold text-xl md:text-2xl text-gray-800 dark:text-white">Shopping Mall</p>
      </div>

      {/* Search - Mobilde gizli, tabletdən etibarən görünsün */}
      <div className="hidden sm:flex items-center border-b border-indigo-500 p-2">
        <CiSearch className="text-gray-500 dark:text-gray-400" />
        <input
          className="outline-none bg-transparent p-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Sağ tərəf */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobil axtarış ikonu */}
        <CiSearch className="block sm:hidden text-2xl cursor-pointer text-gray-700 dark:text-white" />

        {/* Tema dəyişmə */}
        <div onClick={changeTheme} className="cursor-pointer text-gray-700 dark:text-white">
          {theme ? <CiDark size={28} /> : <CiLight size={28} />}
        </div>

        {/* Səbət */}
        <Badge
          onClick={() => dispatch(setDrawer())}
          badgeContent={products.length}
          color="error"
          className="cursor-pointer">
          <CiShoppingBasket size={30} className="text-gray-700 dark:text-white" />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
