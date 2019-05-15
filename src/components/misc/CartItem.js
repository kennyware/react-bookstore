import React, { Component } from 'react'

export class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {}
        }
    }

    componentWillMount() {
        this.setState({item: this.props.item});
        this.changePrice(this.props.item.price);
    }

    changePrice = (price) => {
        let newPrice = '$'.concat(price);
        let newItem = this.props.item;
        newItem.price = newPrice;
        this.setState({item: newItem});
    }

  render() {
      const {item} = this.state;
    return (
        <div className="col-12">
        <div className="cartItem-inner">
            <div className="row">
                <div className="col-3">
                    <img src={item.image} alt="" className="img-fluid" />
                </div>
                <div className="col-9">
                    {item.title}
                    <br />
                    {item.author}
                    <div className="row">
                        <div className="col-12">
                            <span className="cartItem-price">{item.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
  }
}

export default CartItem;


