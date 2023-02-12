import Product from './Product';

function ProductList({products, handleRemoveCart}) {
    return ( 
        products.map((product) => {
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
     );
}

export default ProductList;