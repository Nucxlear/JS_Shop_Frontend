import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import ProductAvailabilityAdd from './ProductAvailabilityAdd'
import ProductList from './ProductList'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
    this.onProductDelete = this.onProductDelete.bind(this);
    this.onProductAdd = this.onProductAdd.bind(this);
  }

  componentDidMount(){
    fetch('products').then(function(res){
       return res.json();
   }).then((data) => {
      this.setState({
          products: data
      });
   });
  }
  onProductDelete(_id){
    this.setState({
      products: this.state.products.filter(function(product){
        return product._id !== _id;
      })
    });
  }

  onProductAdd(product){
    this.setState({
      products: [...this.state.products, product]
      })
  
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ProductList products={this.state.products} onProductDelete={this.onProductDelete}/>} />
            <Route path="/add" element={<ProductAvailabilityAdd onProductAdd={this.onProductAdd}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
