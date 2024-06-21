
import './App.css';
import React from 'react';
import ProductAvailability from './ProductAvailability'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
    this.onProductDelete = this.onProductDelete.bind(this);
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

  onProductDelete(id){
    this.setState({
      products: this.state.products.filter(function(product){
        return product.id !== id;
      })
    });
  }
  render(){

    function mapProducts(product){
      return(
        <ProductAvailability product={product} key={product.id}/>
      )
    }
    return (
      <div className="App">
        <ul>
          {
            this.state.products.map(mapProducts)
          }
        </ul>
      </div>
    );
  }
}
export default App;
