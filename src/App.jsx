import { Router } from "react-router-dom";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import ProductConfiq from "./config/RouterConfiq";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculteBasket, removeFromBasket, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculteBasket());
  }, []);

  return (
    <>
      <PageContainer>
        <Loading />
        <Header />
        <ProductConfiq />
      </PageContainer>
      <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer}>
        {products.map((product) => {
          return (
            <div className="mx-5 my-10">
              <div
                key={product.id}
                className="border-gray-600 border-2 w-100 p-5 flex flex-col items-start gap-2  mb-2 rounded-2xl">
                <img className="min-w-50 max-h-50" src={product.image} alt={product.title} />
                <div className="flex flex-col">
                  <p className="font-bold text-sm">
                    {product.title}
                    <br /> <span> count:{product.count}</span>
                  </p>
                  <p className="text-red-600 font-bold">Price: {product.price}AZN</p>
                  <button onClick={() => dispatch(removeFromBasket(product.id))} className="bg-green-900 text-white cursor-pointer">clear</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="p-10">
          <h2>total:{totalAmount} AZN</h2>
        </div>
      </Drawer>
    </>
  );
}

export default App;
