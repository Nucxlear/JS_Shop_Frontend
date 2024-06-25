import { connect } from 'react-redux';
import './App.css';
import React from 'react';
import { productDelete, productUpateState } from './actions';
class ProductAvailability extends React.Component{

  constructor(props){
    super(props);

    this.onStatusClick = this.onStatusClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onStatusClick(e) {
    e.preventDefault();

    fetch(`products/${this.props.product._id}`, {
      method: 'PATCH',
      body: JSON.stringify({ 
        available: !this.props.product.available
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if(res.status === 200){
        console.log('updated');
        this.props.dispatch(productUpateState(this.props.product._id));
      }
      else{
        console.log('not updated');
      }
    });

  }

  onDeleteClick(e){
    e.preventDefault();

    fetch(`products/${this.props.product._id}`, {
      method: 'DELETE'
    }).then((res) => {
      if(res.status === 200){
        console.log('deleted');
        this.props.dispatch(productDelete(this.props.product._id));
      }
      else{
        console.log('not deleted');
      }
    });
  }

  render(){
    return(
      <div class="product">
        <label htmlFor={this.props.product._id}></label>
        <input type="checkbox" onChange={this.onStatusClick} id={this.props.product._id} defaultChecked={this.props.product.available}/>
        <div class="product-content">
            <div class="product-title">
                <span>{this.props.product.title}</span>
            </div>

            <div class="product-info">
                <div class="desc">
                    <span class="desc-title">Описание</span>
                    <span class="desc-text">{this.props.product.description}</span>
                </div>
                <div class="price">
                    <span class="price-title">Цена</span>
                    <span class="price-text">{this.props.product.price}</span>
                </div>
            </div>

            <div class="product-del">
                <hr/>
                <button class="btn-del" onClick={this.onDeleteClick}>Удалить</button>
            </div>
        </div>
      </div>
    )
  }
}

export default connect() (ProductAvailability);
