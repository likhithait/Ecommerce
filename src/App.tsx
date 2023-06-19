import { productData } from "./data/productData";

function App() {
  console.log(productData);
  return (
    <>
      {productData.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.images.preview} />
            <img src={product.images.model[0]} />
            <img src={product.images.model[1]} />
            <img src={product.images.model[2]} />
            <img src={product.images.design} />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default App;
