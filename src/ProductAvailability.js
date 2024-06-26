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
      <div className="product">
        <label htmlFor={this.props.product._id}></label>
        <input type="checkbox" onChange={this.onStatusClick} id={this.props.product._id} defaultChecked={this.props.product.available}/>
        <div className="product-content">
            <div className="product-title">
                <span>{this.props.product.title}</span>
            </div>

            <div className="product-info">
                <div className="desc">
                    <span className="desc-title">Описание</span>
                    <span className="desc-text">{this.props.product.description}</span>
                </div>
                <div className="price">
                    <span className="price-title">Цена</span>
                    <span className="price-text">{this.props.product.price}</span>
                </div>
            </div>

            <div className="product-del">
                <hr/>
                <button className="btn-del" onClick={this.onDeleteClick}>Удалить</button>
            </div>
        </div>
      </div>
    )
  }
}

export default connect() (ProductAvailability);
