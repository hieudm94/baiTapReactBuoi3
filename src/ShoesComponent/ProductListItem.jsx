import React, { Component } from 'react'

export default class ProductlistItem extends Component {

  render() {
    return (
      <div className='pt-5'>
          <div className="card" >
                    <img src={this.props.shoes.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.shoes.name} </h5>
                        <p className="card-text">{this.props.shoes.price}$ </p>
                        <button style={{border:"1px"}}>Add to cards</button>
                    </div>
                </div>
      </div>
    )
  }
}
