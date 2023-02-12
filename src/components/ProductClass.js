import { Component } from "react"

class Product extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="product">
              <img src={this.props.productImg} alt=''></img>
              <div className="product-description">
                <p>{this.props.productTitle}</p>
                <p>{this.props.productPrice}</p>
                <button className="btn-add" onClick={this.props.onSubmit}>{this.props.type === 'PRODUCT' ? 'Add to cart' : 'Remove'} </button>
              </div>
            </div>
        )
    }
    
  }

export default Product