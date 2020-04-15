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
                    {
                        this.props.productCart.map((obj, index)=>{
                            return <tr key={index}>
                                <td>{obj.name}</td>
                                <td>{obj.price.current.text}</td>
                                <td onClick={()=>this.props.onDeleteProduct(obj)}>X</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </>
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
        onDeleteProduct : (id) => dispatch(deleteProduct(id))
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
