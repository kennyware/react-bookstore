import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItems } from '../../actions/cartActions';
import CartItem from '../misc/CartItem';

export class Cart extends Component {

    componentWillMount() {
        this.props.getCartItems(this.props.userId);
    }

  render() {
      const items = this.props.cart.map(item => {
        return <CartItem key={item._id} item={item} className="cartItem" />
    })
    return (
        <div className="cart">
            <header>
                <h2 className="text-center">Cart</h2>
            </header>
            <div className="cart-items">
                <div className="row">
                    {items}
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    userId: state.user.userId,
    cart: state.cart.cart
});

export default connect(mapStateToProps, { getCartItems })(Cart);
