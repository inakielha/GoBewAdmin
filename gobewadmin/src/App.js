import logo from './logo.svg';
import './App.css';
import ProductsList from './components/products/productsList/ProductsList';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ProductsList/>
    </div>
  );
}

export default App;
