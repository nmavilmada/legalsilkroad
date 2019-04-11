import React from 'react';

export default React.createContext({
    prodcuts: [],
    addProduct: (p) => {},
    removeProduct: (id) => {}
});