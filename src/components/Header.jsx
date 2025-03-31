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
    <div className="flex justify-between items-center p-5">
      <div onClick={() => navigate("/")} className="flex items-center gap-0.5 p-3 cursor-pointer">
        <img className="w-10 h-10" src="./src/images/logo.png" alt="header_logo" />
        <p className="font-bold text-2xl">Shopping Mall</p>
      </div>

      <div className="flex items-center">
        <CiSearch />
        <input className="border-b-1 border-indigo-500 p-2.5" type="text" placeholder="Search..." />
      </div>

      <div className="flex items-center gap-1 cursor-pointer">
        <div>
          {theme ? (
            <CiDark size={30} onClick={changeTheme} />
          ) : (
            <CiLight size={30} onClick={changeTheme} />
          )}
        </div>

        <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
          <CiShoppingBasket size={30} />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
