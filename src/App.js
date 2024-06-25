import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { productAddAll } from './actions';
import React from 'react';
import ProductAvailabilityAdd from './ProductAvailabilityAdd'
import ProductList from './ProductList'


class App extends React.Component{
  componentDidMount(){
    fetch('products').then(function(res){
       return res.json();
   }).then((data) => {
    this.props.dispatch(productAddAll(data));
   });
  }
  
  render(){
    return (
            <Provider store={this.props.store}>
            <Router>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/add" element={<ProductAvailabilityAdd/>} />
              </Routes>
            </Router>
            </Provider>
    );
  }
}
export default connect()(App);
