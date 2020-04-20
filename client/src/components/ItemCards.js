import React, { Component } from 'react'
import '../css/main.css'
import {connect} from 'react-redux'
import {addProduct} from '../actions/actionTemplate'

export class ItemCards extends Component {



    addToCart = (e) => {


        this.props.addProduct(this.props.product)

        console.log(this.props.product)

    }

    render() {
        return (
            <div className="itemCard">
            <div className="imgCardCont">
                <img src={this.props.product.images[0].url} alt="Smiley face" key={this.props.product.id} className="itemImg" ></img>
                <br />
                {this.props.product.name}
                <br />
                {this.props.product.price.formattedValue}
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
