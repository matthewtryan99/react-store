import React, { Component } from 'react'
import {connect} from 'react-redux'
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
                    <div>
                        {product.name}
                        <img src={imgUrl} alt="Smiley face" key={product.id}></img>
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
    return{
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
