import './App.css';
import {useState} from 'react';
import Product from './components/Product';
import Header from './components/Header';
import useInputForm from './hooks/useInput';
import {dataProducts} from './data/dataProducts';

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
  const inputTitle = useInputForm();
  const inputPrice = useInputForm();
  const inputType = useInputForm();

	const handleSubmit = (event) => {
		event.preventDefault();

		const tempProduct = {
      id: products.length,
      productImg: './images/poloNam.jpeg',
      productTitle: inputTitle.value,
      productPrice: inputPrice.value,
      type: inputType.value,
    }

    setProducts(prev => [...prev, tempProduct])
	}

  return (
    <div className="App">
      <Header />
      
      <form onSubmit={handleSubmit}>
        <div className='product-form'>
        <h3 style={{textAlign: 'center'}}>Thông tin sản phẩm</h3>

        <div>
            <label>Tên sản phẩm: </label>
            <input placeholder='Nhập tên sản phẩm' type="text" value={inputTitle.value} onChange={inputTitle.onChange} />
        </div>

        <div>
            <label>Giá sản phẩm: </label>
            <input type="text" placeholder='Nhập giá sản phẩm'  value={inputPrice.value} onChange={inputPrice.onChange} />
        </div>

        <div>
            <label>Loại sản phẩm: </label>
            <input type="text" placeholder='Nhập loại sản phẩm'  value={inputType.value} onChange={inputType.onChange} />
        </div>

        <button type="submit">Thêm sản phẩm</button>
        </div>
		  </form>

      <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
      <div className='product-container'>
        {
          products.map((product) => {
            return (
              <Product
                key={product.id}
                productImg={product.productImg}
                productTitle={product.productTitle}
                productPrice={product.productPrice}
                type='PRODUCT'
                onSubmit={() => handleAddToCart(product)}
              />
            )
          })
        }
      </div>

      <div>
        <h3 style={{textAlign: 'center'}}>Danh sách giỏ hàng</h3>
        <div className='product-container'>
          {
            listCart.length > 0 && listCart.map((product) => {
              return (
                <Product
                  key={product.id}
                  productImg={product.productImg}
                  productTitle={product.productTitle}
                  productPrice={product.productPrice}
                  type='CART'
                  onSubmit={() => handleRemoveCart(product)}
                />
              )
            })
          }
        </div>
      </div>
      
    </div>
  );
}
export default App;

