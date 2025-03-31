import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
import { Grid } from "@mui/material";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Grid container spacing={2}>
      {products && products.map((product) => <Product key={product.id} product={product} />)}
    </Grid>
  );
};

export default ProductsList;
