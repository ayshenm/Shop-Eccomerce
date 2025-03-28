import React, { useEffect } from 'react';
import{ useDispatch,useSelector} from "react-redux"
import { getAllProducts } from '../redux/slices/productSlice';

const ProductsList = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.products);
    console.log("hhh", products)

    useEffect(()=>{
        dispatch(getAllProducts())

    },[]);

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList