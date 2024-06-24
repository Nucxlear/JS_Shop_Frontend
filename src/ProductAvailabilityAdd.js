
import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

class ProductAvailabilityAddInner extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      title: '',
      description:'',
      price: ''
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
  }

  onTitleChange(e) {
    e.preventDefault();

    this.setState ({
      title: e.target.value
    });
  }

  onDescriptionChange(e) {
    e.preventDefault();

    this.setState ({
      description: e.target.value
    });
  }

  onPriceChange(e) {
    e.preventDefault();

    this.setState ({
      price: e.target.value
    });
  }

  onAddFormSubmit(e){
    e.preventDefault();

    fetch(`products`, {
      method: 'POST',
      body: JSON.stringify({ 
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      return res.json();
    }).then((data) => {
      this.props.onProductAdd(data);
      this.props.history('/');
    });
  }

  render(){
    return(
      <form onSubmit={this.onAddFormSubmit}>
        <input type="text" value ={this.state.title} onChange={this.onTitleChange} placeholder="Title"/>
        <input type="text" value ={this.state.description} onChange={this.onDescriptionChange} placeholder="Description"/>
        <input type="text" value ={this.state.price} onChange={this.onPriceChange} placeholder="Price"/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

const ProductAvailabilityAdd = (props) =>{
  return(
    <ProductAvailabilityAddInner {...props} history={useNavigate()}/>
  )
}
export default ProductAvailabilityAdd;
