import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteProduct} from '../actions/actionTemplate'

export class ShoppingCart extends Component {


    render() {
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        this.props.productCart.map((obj, index)=>{
                            return <tr key={index}>
                                <td>{obj.productName}</td>
                                <td>{obj.productPrice}</td>
                                <td onClick={()=>this.props.onDeleteProduct(obj)}></td>
                            </tr>
                        })
                    } */}
                    <button onClick={()=>{console.log(this.props)}}>test</button>
                </tbody>
            </table>
            </>
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
        onDeleteProduct : (productData) => dispatch(deleteProduct(productData))
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
