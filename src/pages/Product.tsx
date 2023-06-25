// Import hook
import { useParams } from "react-router-dom";
// import data
import { productData } from "../data/productData";
// Import components
import ShowProduct from "../components/Product/ShowProduct";
import Page404 from "./Page404";

const Product = () => {
  const { productID } = useParams<{ productID: string }>();
  const haveProduct = productID <= productData.length;

  return haveProduct ? <ShowProduct productID={productID} /> : <Page404 />;
};

export default Product;
