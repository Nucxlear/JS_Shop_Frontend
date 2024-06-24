import { NavLink } from 'react-router-dom';
import './App.css';
import React from 'react';
import ProductAvailability from './ProductAvailability'
import ProductAvailabilityAdd from './ProductAvailabilityAdd'

import { connect } from 'react-redux';
class ProductList extends React.Component{
  render(){
    return (
      <div className="List">
        <NavLink to='/add'>Add product</NavLink>
        <ul>
          {
            this.props.products.map((product) =>{
              return(
                <ProductAvailability product={product} onProductDelete={this.props.onProductDelete}  key={product._id}/>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    products: [...state.products]
  }
}
export default connect(mapStateToProps)(ProductList);
