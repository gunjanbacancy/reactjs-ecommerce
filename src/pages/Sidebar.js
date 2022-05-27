import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Sidebar extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/v2/maincategory')
      .then(res => {
        const categories = res.data.data.main_category;
        this.setState({ categories });
      })
  }
  
  render() {
    return (
      <div className="side">
        <h2>Categories</h2>
        <ul>
          {
            this.state.categories
              .map(categories =>
                <li key={categories.id}> <Link to={`/category/${categories.id}`}>{categories.name}</Link></li>
              )
          }
        </ul>
      </div>
    );
  }
}

export default Sidebar