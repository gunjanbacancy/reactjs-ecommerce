import React, { Component } from 'react';
import Greeting from './Greeting';
import axios from 'axios';
import { withParams } from "../HOC";

class Category extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    console.log(this.props.params.id);
    axios.get(`http://127.0.0.1:8000/api/v2/catalog/category/${this.props.params.id}?page=1&limit=100`)
      .then(res => {
        const products = res.data.data.products;
        this.setState({ products });
      })
  }

  render() {
    const title = "Category Page";
    
    return <div className="container">
      <Greeting greeting={title} />
      
      <div className="row">
      {
        this.state.products
          .map(products =>
            <div className="col-md-4">
              <div className="ibox">
                  <div className="ibox-content product-box">
                      <div className="product-imitation">
                      <img className="img-thumbnail" src={products.images[0]}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src="https://dummyimage.com/200x150/000/ebecf5.png&text=++++image+++";
                        }} />
                      </div>
                      <div className="product-desc">
                          <span className="product-price">
                              ${products.price}
                          </span>
                          <a href="#" className="product-name">{products.name}</a>

                          <div className="m-t text-righ">
                              <a href="#" className="btn btn-xs btn-outline btn-primary">View <i className="fa fa-long-arrow-right"></i> </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  }
}

export default withParams(Category);