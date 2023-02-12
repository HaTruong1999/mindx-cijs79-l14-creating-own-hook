import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import {dataProducts} from './data/dataProducts';
import FormAddProduct from './components/FormAddProduct';
import ProductList from './components/ProductList';


function App() {
  //Cart
  const [products, setProducts] = useState(dataProducts);
  const [listCart, setListCart] = useState([]);

  const handleAddToCart = (product) => {
    setListCart(prev => [...prev, product])
  }

  const handleRemoveCart = (product) => {
    setListCart(prev => {
      return prev.filter(p => p.id !== product.id);
    })
  }

  //form

	const handleAddProduct = (data) => {
		const tempProduct = {
      id: products.length,
      productImg: './images/poloNam.jpeg',
      productTitle: data.inputTitle,
      productPrice: data.inputPrice,
      type: data.inputType,
    }

    setProducts(prev => [...prev, tempProduct])
	}


	const handleAddToCartDemo = (data) => {
		const tempProduct = {
      id: products.length,
      productImg: './images/poloNam.jpeg',
      productTitle: data.inputTitle,
      productPrice: data.inputPrice,
      type: data.inputType,
    }

    setListCart(prev => [...prev, tempProduct])
	}

  return (
    <div className="App">
      <Header />

      <FormAddProduct handleAddProduct={handleAddProduct} />

      <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
      <div className='product-container'>
          <ProductList products={products} handleAddToCart = {handleAddToCart} />
      </div>

      <FormAddProduct handleAddProduct={handleAddToCartDemo} />

      <div>
        <h3 style={{textAlign: 'center'}}>Danh sách giỏ hàng</h3>
        <div className='product-container'>
          <ProductList products={listCart} handleAddToCart = {handleRemoveCart} />
        </div>
      </div>
      
    </div>
  );
}
export default App;

