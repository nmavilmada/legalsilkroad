<<<<<<< HEAD

import axios from 'axios';
import React, { Component } from 'react';

var apiBaseUrl = "http://localhost:4000/api/";



class Cart extends Component {
    constructor(props){
      super(props);
      var localCartComponent=[];
      localCartComponent.push()
      
    this.state={
      id:'',
      name_product:'',
      quantity:'',
      sub_total:'',
      cartComponent:localCartComponent,
      loginRole:'student'
    }
  }

  componentWillMount(){
    console.log("in Buyer componentWillMount");
      var localCartComponent=[];
      localCartComponent.push()
      this.setState({id:'',name_product:'',quantity:'',sub_totl:'',cartComponent:localCartComponent})
    }


handleClick(event){
    // eslint-disable-next-line no-unused-vars
    var self = this;
    var payload={
      "id":this.state.id,
	    "name_product":this.state.name_product,
      "quantity":this.state.quantity,
      "sub_total":this.state.sub_total
    }

    axios.post(apiBaseUrl+'cart', payload)
   .then(function (response) {
     console.log(response);
  });
}
}

=======
import React from 'react';
>>>>>>> 6df07cc7f4c1e9882bd71997aad1722cea1a00f7

export default React.createContext({
  products: [],
  addProduct: (p) => console.log('h'),
  removeProduct: (id) => {}
});