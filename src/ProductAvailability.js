
import './App.css';
import React from 'react';

class ProductAvailability extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      available: this.props.product.available
    }
    this.onStatusClick = this.onStatusClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onStatusClick(e) {
    e.preventDefault();

    fetch(`products/${this.props.product._id}`, {
      method: 'PATCH',
      body: JSON.stringify({ 
        available: !this.state.available
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if(res.status === 200){
        console.log('updated');
        this.setState ({
          available: !this.state.available
        });
        
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
        this.props.onProductDelete(this.props.product._id);
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
      <span onClick={this.onStatusClick}>{this.state.available ? 'Available':'Not available'}</span>
      <button onClick={this.onDeleteClick}>Delete</button>
      </li>
    )
  }
}

export default ProductAvailability;
