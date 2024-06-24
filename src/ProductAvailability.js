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
      <li>
      <span>{this.props.product.title + ' '}</span>
      <span><i>{this.props.product.description + ' '}</i></span>
      <span><b>{this.props.product.price + ' '}</b></span>
      <span onClick={this.onStatusClick}>{this.props.product.available ? 'Available':'Not available'}</span>
      <button onClick={this.onDeleteClick}>Delete</button>
      </li>
    )
  }
}

export default connect() (ProductAvailability);
