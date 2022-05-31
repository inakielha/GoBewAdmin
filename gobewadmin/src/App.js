import logo from './logo.svg';
import './App.css';
import ProductsList from './components/products/productsList/ProductsList';
import Nav from './components/nav/Nav';
import CreationForm from './components/products/createForm/CreationForm';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ProductsList/>
      <CreationForm/>
    </div>
  );
}

export default App;
