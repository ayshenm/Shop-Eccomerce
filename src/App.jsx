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

      {/* Səbət Drawer */}
      <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer}>
        <div className="p-5 w-[90vw] sm:w-[400px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-gray-600 border-2 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center mb-4">
              {/* Məhsul Şəkili */}
              <img
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                src={product.image}
                alt={product.title}
              />

              {/* Məhsul Məlumatları */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="font-bold text-sm sm:text-base">{product.title}</p>
                <p className="text-gray-600 text-xs sm:text-sm">Count: {product.count}</p>
                <p className="text-red-600 font-bold text-sm sm:text-base">
                  Price: {product.price} AZN
                </p>

                {/* Məhsulu silmə düyməsi */}
                <button
                  onClick={() => dispatch(removeFromBasket(product.id))}
                  className="bg-green-900 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg mt-2 transition-all hover:bg-green-700">
                  Clear
                </button>
              </div>
            </div>
          ))}

          {/* Ümumi Məbləğ */}
          <div className="p-4 border-t mt-4">
            <h2 className="text-lg font-bold">Total: {totalAmount} AZN</h2>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default App;
