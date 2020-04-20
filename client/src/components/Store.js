import React, { Component } from 'react'
import SideBar from './StoreSideBar'
import Container from './Container'
import queryString from 'query-string'
import '../css/main.css'

export class Store extends Component {

    constructor(props){
        super(props)
        console.log(this.props.clothingType)
    }


    state = {
        loading: true
    }

    componentDidMount(){
        this.value = queryString.parse(this.props.location.search)
        this.setState({
            loading: false
        })
        console.log(this.value)
    }

    render() {
        return (
            <>
            <div className="d-flex">
            <SideBar />
            {this.state.loading ? (<div>loading...</div>) :
            (<Container value={this.value} clothing={this.value.clothing}/>)}
            </div>
            </>
        )
    }
}


export default Store
