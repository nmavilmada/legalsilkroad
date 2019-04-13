import React from 'react';

var apiBaseUrl = "http://localhost:4000/api/";

class Cart extends Component {
    constructor(props){
      super(props);
      var localcartComponent=[];
      localcartComponent.push()
      
    this.state={
      id:'',
      name_product:'',
      quantity:'',
      sub_total:'',
      cartComponent:localcartComponent,
      loginRole:'student'
    }
  }

handleClick(event){
    var self = this;
    var payload={
      "id":this.state.id,
	  "name_product":this.state.name_product,
      "quantity":this.state.quantity,
      "sub_total":this.state.sub_total
    }



export default React.createContext({
    prodcuts: [],
    addProduct: (p) => {},
    removeProduct: (id) => {}
});