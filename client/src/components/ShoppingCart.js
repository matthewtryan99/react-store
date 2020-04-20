import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteProduct, clearProduct} from '../actions/actionTemplate'
import { Button, Table } from 'react-bootstrap'
import '../css/main.css'

export class ShoppingCart extends Component {


    render() {
        return (
            <>
            <div className="shoppingCart">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>X</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.productCart.map((obj, index)=>{
                            return <tr key={index}>
                                <td>{obj.name}</td>
                                <td>{obj.price.formattedValue}</td>
                                <td ><Button onClick={()=>this.props.onDeleteProduct(obj)} className="bg-danger">X</Button></td>
                            </tr>
                        })
                    }
                    <tr>
                        <td>Subtotal</td>
                        <td>$ {this.props.totalCost}</td>
                    </tr>
                </tbody>
                </Table>
                <Button className="bg-danger" onClick={()=>{this.props.onClearProduct()}}>Checkout</Button>
                </div>
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
        onDeleteProduct : (id) => dispatch(deleteProduct(id)),
        onClearProduct : () => dispatch(clearProduct())
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
