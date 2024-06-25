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
        <navLink>
            <a class="btn-add-product" href="add">Add products</a>
        </navLink>
        
        <hr/>

        <div class="list-products">
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
