import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from "./components/Product.jsx";
import CartContextProvaider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvaider>
      <Header />
      <Shop>
        {/* Questo era prima in Shop.jsx, ma l'abbiamo spostato fuori cosi */}
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvaider>
  );
}

export default App;
