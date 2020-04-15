import React, { Component } from 'react'
import '../css/main.css'
import {connect} from 'react-redux'
import {addProduct} from '../actions/actionTemplate'

export class ItemCards extends Component {

    constructor(props){
        super(props);
    }

    addToCart = (e) => {
        this.props.addProduct(this.props.product)
    }

    render() {
        return (
            <div>
            <div className="imgCardCont">
                <img src={this.props.imgUrl} alt="Smiley face" key={this.props.product.id} className="itemImg" ></img>
                <br />
                {this.props.product.name}
            </div>
            <button onClick={this.addToCart}>Add to Cart</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        totalCost: state.template.totalCost,
        productCart: state.template.productCart
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return{
        addProduct : (productData) => dispatch(addProduct(productData))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCards)
