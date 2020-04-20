import React, { Component } from 'react'
import '../css/main.css'
import {Link} from 'react-router-dom'

export class StoreSideBar extends Component {
    render() {
        return (
            <div className="sticky-side-nav col-3">
                <Link to="/store/?clothing=men">Men</Link>
                <Link to="/store/?clothing=women">Women</Link>
                <Link to="/store/?clothing=kids">Kids</Link>
            </div>
        )
    }
}

export default StoreSideBar
