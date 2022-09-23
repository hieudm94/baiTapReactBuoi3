import React, { Component } from 'react'
import ProductListItem from './ProductListItem'

export default class ProductList extends Component {
    renderShow = () => {
        return this.props.arrayShoes.map((shoes) => {
            let { id } = shoes;
            return <div className="col-4" key={`shoes-${id}`}>
                <ProductListItem shoes = {shoes}/>
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderShow()}
                </div>
            </div>
        )
    }
}
