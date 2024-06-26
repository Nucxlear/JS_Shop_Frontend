
import './App.css';
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {productAdd} from './actions'
import { connect } from 'react-redux';
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
      this.props.dispatch(productAdd(data._id, data.title, data.description, data.price));
      this.props.history('/');
    });
  }

  render(){
    return(
      <section>
        <NavLink className="btn-go-back" to='/'>
            <span>Go back</span>
        </NavLink>
        
        <hr/>

        <form className="form-add-product" onSubmit={this.onAddFormSubmit}>
            <input className="input-title" value={this.state.title} onChange={this.onTitleChange} type="text" placeholder="Название" />
            <input className="input-desc"  value={this.state.description} onChange={this.onDescriptionChange} type="text" placeholder="Описание"/>
            <input className="input-price" value={this.state.price} onChange={this.onPriceChange}type="text" placeholder="Цена" />
            <button className="btn-add">Добавить</button>
        </form>
      </section>
    )
  }
}

const ProductAvailabilityAdd = (props) =>{
  return(
    <ProductAvailabilityAddInner {...props} history={useNavigate()}/>
  )
}
export default connect()(ProductAvailabilityAdd);
