import React, { Component } from 'react'
import PayPal from './PayPal'
// Paypal Component
const CLIENT = {
    sandbox: 'AXBgofu5NzNZUucVXSTLl1LcY4IkG_fVW-3W5M0AtvpDVZXMslH9aiZfdNSfM67Gj7waym2yJclwakv8',
    production: 'AY1TqwhuMOyxbLTt18ZcswnNCzhr-hMkBNYblgpHaKuLMXWEWvBX6-kX4YlsKQBeCB_5MK5ZA-hfZpEu'
  };
  
  const ENV = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'sandbox';
    
    export class PayPalButton extends Component {
      render() {

        const onSuccess = (payment) =>
        console.log('Successful payment!', payment);
  
      const onError = (error) =>
        console.log('Erroneous payment OR failed to load script!', error);
  
      const onCancel = (data) =>
        console.log('Cancelled payment!', data);
        return (
            <div>
            <PayPal
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={'USD'}
              total={100}
              onSuccess={onSuccess}
              onError={onError}
              onCancel={onCancel}
            />
          </div>
        )
      }
    }
    
    export default PayPalButton
    