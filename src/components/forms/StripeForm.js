import React, { Component } from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import axios from 'axios';

export class StripeForm extends Component {
  static propTypes = {

  }

  constructor(props) {
      super(props);

      this.state = {
          email: ""
      }
  }

  handleSubmit = (e) => {
      e.preventDefault();

      this.props.stripe.createToken({name: 'Jenny Test'}).then(({token}) => {
        console.log('Received Stripe token:', token);
        axios.post('http://localhost:8080/charge', {email: this.state.email, token, price: 1500}).then(() => console.log('done'));
      });     
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)} style={{width: '50%', margin: 'auto'}}>
            Card Details
            <CardElement />
            <div>
                <input type="email" onChange={this.handleChange.bind(this)} name="email" value={this.state.email} placeholder="Email" /> 
            </div>

            <button>Submit</button>
        </form>
    )
  }
}

export default injectStripe(StripeForm);
