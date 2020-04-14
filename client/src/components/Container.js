import React, { Component } from 'react'
import {connect} from 'react-redux'
import ItemCard from './ItemCards'
import '../css/main.css'

export class Container extends Component {

    state = {
        loading: true,
        products: []
    }

    componentDidMount(){
        fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "bc859da30fmshe4ec20408510552p1f6706jsn475a2ba69706"
            }
        })
        .then(response => response.json())
        .then(products => {
            console.log(products.products)
            this.setState({loading: false, products: products.products})
        })
        .catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <>
                {this.state.loading ? (<div>loading...</div>) : 
                (
                this.state.products.map(product => {
                    // console.log(product.name)
                    let imgUrl = "http://" + product.imageUrl
                    return (
                    <div className="itemGrid">
                        <div>
                            <ItemCard product={product} imgUrl={imgUrl} />
                        </div>
                    </div>
                    )

                })
                )
                }
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
        // onAddProduct : (productData) => dispatch(addProduct(productData))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
