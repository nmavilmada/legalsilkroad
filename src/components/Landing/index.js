import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.postimg.cc/y8tFmBPr/Image-from-i-OS.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
             
            <p>Legal Silk Road (LSR) is a new e-commerce tool, developed by programmers Nali, Kinan, and Keith, to dramatically change the online shopping and selling experience. Designed to improve the experiences of everyday online shoppers and sellers, LSR provides an easy-to-use tool for both first-time and skilled sellers to upload photos and descriptions about their products. LSR removes the middleman from buyers and sellers to provide a stress free online shopping experience. </p>
        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
