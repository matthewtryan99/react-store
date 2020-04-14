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
        console.log(this.props)
    }

    render() {
        return (
            <div>
            <div className="imgCardCont">
                <img src={this.props.imgUrl} alt="Smiley face" className="itemImg" onClick={()=>{console.log(this.props)}}></img>
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
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return{
        addProduct : (productData) => dispatch(addProduct(productData))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCards)
