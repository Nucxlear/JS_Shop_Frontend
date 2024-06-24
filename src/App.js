
import './App.css';
import React from 'react';
import ProductAvailability from './ProductAvailability'
import ProductAvailabilityAdd from './ProductAvailabilityAdd'

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
        <ProductAvailabilityAdd onProductAdd={this.onProductAdd}/>
        <ul>
          {
            this.state.products.map((product) =>{
              return(
                <ProductAvailability product={product} onProductDelete={this.onProductDelete}  key={product._id}/>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
export default App;
