import React, { useEffect } from 'react';
import{ useDispatch,useSelector} from "react-redux"
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';

const ProductsList = () => {

    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product);
    

    useEffect(() => {
        dispatch(getAllProducts())

    },[])

  return (
    <div className='flex gap-2 flex-wrap mt-5 pb-5'> 
      {
       products && products.map((product)=>(
        <Product key={product.id} product={product}/>
       ))
      }
    </div>
  )
}

export default ProductsList