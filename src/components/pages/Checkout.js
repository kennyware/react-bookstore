import React, { Component } from 'react';
import StripeForm from '../forms/StripeForm';
import { Elements } from 'react-stripe-elements';
import Cart from './Cart';

export class Checkout extends Component {
  render() {
    return (
      <div>
        <Elements>
          <StripeForm />
        </Elements>
        <Cart /> 
      </div>
    )
  }
}

export default Checkout;
