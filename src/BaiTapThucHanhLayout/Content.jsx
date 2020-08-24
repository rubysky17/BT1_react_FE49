import React from 'react'
import Carousel from './Carousel'
import ProducList from './ProducList'

export default function Content() {
    return (
        <div className="container">
            {/* Carousel Header */}
            <Carousel />
            {/* Page Features */}
            <ProducList />
        </div>

    )
}
