import { NavLink } from 'react-router-dom';
import './App.css';
import React from 'react';
import ProductAvailability from './ProductAvailability'
import ProductAvailabilityAdd from './ProductAvailabilityAdd'

import { connect } from 'react-redux';
class ProductList extends React.Component{
  render(){
    return (
      <section >
        <NavLink className="btn-add-product" to='/add'>
            <span>Add products</span>
        </NavLink>
        
        <hr/>

        <div className="list-products">
            {
              this.props.products.map((product)=>{
                return(
                  <ProductAvailability product={product} onProductDelete={this.props.onProductDelete} key={product._id}/>
                )
              })
            }
        </div>
    </section>
    );
  }
}

function mapStateToProps(state){
  return{
    products: [...state.products]
  }
}
export default connect(mapStateToProps)(ProductList);
