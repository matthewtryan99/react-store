import React, { Component } from 'react'
import ItemCard from './ItemCards'
import '../css/main.css'
import {Link} from 'react-router-dom'


export class Container extends Component {

    constructor(props){
        super(props)
    }

    state = {
        loading: true,
        products: []
    }

    newClothes = (page) => {


        this.setState({loading: true, products: []})

        fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=${page}&pagesize=24`, {
            "method": 
        
        "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
                "x-rapidapi-key": "bc859da30fmshe4ec20408510552p1f6706jsn475a2ba69706"
            }})
        .then(response => response.json())
        .then(products=>{
            this.setState({loading: false, products: products.results})

        })
        .catch(err => {
            console.log(err);
        })

    }

    componentDidMount(){

        let category = ""

        switch(this.props.clothing){
            case "men":
                category = "men_all"
                break;
            case "women":
                category = "ladies"
                break;
            case "kids":
                category = "men_all"
                break;
            default:
                category = "men_all"
        }

        fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=${category}&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=0&pagesize=24`, {
            "method": 
        
        "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
                "x-rapidapi-key": "bc859da30fmshe4ec20408510552p1f6706jsn475a2ba69706"
            }})
        .then(response => response.json())
        .then(products=>{
            this.setState({loading: false, products: products.results})
            console.log(products)
            console.log(this.state.products)

        })
        .catch(err => {
            console.log(err);
        })

        let nextPage = parseInt(this.props.value.page) + 1
        this.nextPageUrl = "/store/?page=" + nextPage.toString()
        let previousPage = parseInt(this.props.value.page) - 1
        this.previousPage = "/store/?page=" + previousPage.toString()
        this.previous = "<"
    }
    render() {
        return (
            <div className="d-flex screenWidth col-9">
                {this.state.loading ? (<div className="d-flex align-items-center full-width"><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif "></img></div>) : 
                (
                this.state.products.map((product, index) => {
                    return (
                    <div className="col-3 item-margins"key={index}>
                        <div>
                            <ItemCard key={product.id} product={product} />
                        </div>
                    </div>
                    )
                })
                )
                }
                <div className="d-flex screenWidth justify-content-end">
                <div className="pageButtonSize d-flex justify-content-between">
                    <Link  to={this.previousPage} onClick={this.newClothes}> {this.previous} </Link>    <Link  to="/store/?page=1" onClick={()=>{this.newClothes(1)}}>1</Link> <Link  to="/store/?page=2" onClick={()=>{this.newClothes(2)}}>2</Link> <Link  to="/store/?page=3" onClick={()=>{this.newClothes(3)}}>3</Link> <Link  to="/store/?page=4" onClick={()=>{this.newClothes(4)}}>4</Link> <Link  to="/store/?page=5" onClick={()=>{this.newClothes(5)}}>5</Link> <Link  to={this.nextPageUrl}>></Link>
                </div>
                </div>
            </div>
        )
    }
}


export default Container
