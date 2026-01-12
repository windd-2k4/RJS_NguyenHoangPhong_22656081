import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProductCard
        image="https://picsum.photos/200/300"
        name=" basic"
        price="199.000"
      />
      <ProductCard
        image="https://picsum.photos/200/300"
        name=" basic"
        price="199.000"
      />
      <ProductCard
        image="https://picsum.photos/200/300"
        name=" basic"
        price="199.000"
      />
      <ProductCard
        image="https://picsum.photos/200/300"
        name=" basic"
        price="199.000"
      />
    </div>
  );
}

export default App;
