import React, { Component } from 'react'
import {connect} from 'react-redux'
import ItemCard from './ItemCards'
import '../css/main.css'
import queryString from 'query-string'

export class Container extends Component {

    state = {
        loading: true,
        products: []
    }

    componentDidMount(){
        const value = queryString.parse(this.props.location.search)

        fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=${24 * (value.page - 1)}&categoryId=4209&limit=24&store=US`, {
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

        let nextPage = parseInt(value.page) + 1
        this.nextPageUrl = "/store/?page=" + nextPage.toString()
        let previousPage = parseInt(value.page) - 1
        this.previousPage = "/store/?page=" + previousPage.toString()
        this.previous = "<"
        this.counter = 0
    }
    render() {
        return (
            <div className="d-flex screenWidth">
                {this.state.loading ? (<div>loading...</div>) : 
                (
                this.state.products.map((product, index) => {
                    // console.log(product.name)
                    let imgUrl = "http://" + product.imageUrl
                    this.counter = this.counter + 1
                    return (
                    <div className="col-2"key={index}>
                        <div>
                            <ItemCard key={product.id} product={product} imgUrl={imgUrl} />
                        </div>
                    </div>
                    )
                })
                )
                }
                <div class="d-flex screenWidth justify-content-end">
                <div class="pageButtonSize d-flex justify-content-between">
                    <a className="pageButtonFont" href={this.previousPage}> {this.previous} </a>    <a className="pageButtonFont" href="/store/?page=1">1</a> <a className="pageButtonFont" href="/store/?page=2">2</a> <a className="pageButtonFont" href="/store/?page=3">3</a> <a className="pageButtonFont" href="/store/?page=4">4</a> <a className="pageButtonFont" href="/store/?page=5">5</a> <a className="pageButtonFont" href={this.nextPageUrl}>></a>
                </div>
                </div>
            </div>
        )
    }
}


export default Container
