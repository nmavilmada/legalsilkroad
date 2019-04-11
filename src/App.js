import React, { Component } from 'react';
import MainRouter from './MainRouter';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import './App.css';

import CartContext from './CartContext';

class App extends Component {

  state = {
    products : []
  };

  addProduct = (p) => {
    const { products } = this.state;
    products.push(p);
    this.setState({
      products: products
    });
  };

  removeProduct = (id) => {
    const { products } = this.state;
    const removingIndex = products.findIndex(p => p.id === id);
    this.setState({
      products: products.filter((_, i) => i !== removingIndex)
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <CartContext.Provider value={{
          products,
          addProduct: this.addProduct,
          removeProduct: this.removeProduct
        }}>
          <MainRouter />
        </CartContext.Provider>
        
      </div>
    );
  }
}

export default App;