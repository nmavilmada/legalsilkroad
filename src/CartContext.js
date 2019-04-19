
import React from 'react';


export default React.createContext({
  products: [],
  addProduct: (p) => console.log('h'),
  removeProduct: (id) => {}
});