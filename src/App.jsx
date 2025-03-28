import { Router } from "react-router-dom";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import ProductConfiq from "./config/RouterConfiq"
import Loading from "./components/Loading";


function App() {
  return (
   <PageContainer>
    <Loading/>
    <Header/>
    <ProductConfiq/>
   </PageContainer>
  );
}

export default App;
