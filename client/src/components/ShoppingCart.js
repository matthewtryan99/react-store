import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteProduct} from '../actions/actionTemplate'
import { Button, Table } from 'react-bootstrap'

export class ShoppingCart extends Component {


    render() {
        return (
            <>
            {/* <div className="shoppingCart">
            <table>
                <thead>
                    <tr>
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.productCart.map((obj, index)=>{
                            return <tr key={index}>
                                <td>{obj.name}</td>
                                <td>{obj.price.formattedValue}</td>
                                <td ><Button onClick={()=>this.reloadCart(obj)}>X</Button></td>
                            </tr>
                        })
                    }
                    <tr>
                        <td>Subtotal</td>
                        <td>$ {this.props.totalCost}</td>
                    </tr>
                </tbody>
            </table>
                    <br />
            </div>
            <div className="shoppingCart">

            </div> */}

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
                <Button className="bg-danger">Checkout</Button>
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
