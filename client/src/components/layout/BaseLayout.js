import React from 'react'
import Header from './Header'
import Footer from './Footer'

function BaseLayout(props) {
    return (
        <>
        <Header />
        <br />
        {props.children}
        <br />
        <Footer />
        </>
    )
}

export default BaseLayout
