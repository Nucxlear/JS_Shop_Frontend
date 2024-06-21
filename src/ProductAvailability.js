
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

    this.setState ({
      available: !this.state.available
    });
  }

  onDeleteClick(e){
    e.preventDefault();

    fetch(`tasks/${this.props.product.id}`, {
      method: 'DELETE'
    }).then(function(res){
      if(res.status === 200){
        console.log('deleted') 
      }
      else{
        console.log('not deleted')
      }
    });
  }

  render(){
    return(
      <li onClick = {this.onStatusClick}>{this.props.product.name}  
      - {this.state.available ? 'Available':'Not available'} <button onClick={this.onDeleteClick}>Delete</button></li>
    )
  }
}

export default ProductAvailability;
