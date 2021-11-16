import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      resultImg: [],
      value: "",
      isLegal: false,
      isIllegal: false,
      i: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get("https://thronesapi.com/api/v2/Characters").then((response) => {
      let data = response.data;
      let a = [],
        b = [];
      data.forEach((element) => {
        a.push(element.fullName);
        b.push(element.imageUrl);
      });
      this.setState({ names: a, resultImg: b });
    });
  }

  handleChange(event) {
    let items = { ...this.state };
    items.value = event.target.value;
    this.setState(items);
  }

  handleClick(event) {
    let items = { ...this.state };
    items.i = items.names.indexOf(items.value);
    if (items.i < 0) {
      items.isLegal = false;
      items.isIllegal = true;
    } else {
      items.isLegal = true;
      items.isIllegal = false;
    }

    this.setState(items);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <div className="navbar-brand">Enter a Game of Thrones Character</div>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={this.state.value}
              onChange={this.handleChange}
              required
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-secondary"
              onClick={this.handleClick}
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>

        {this.state.isLegal ? (
          <div className="text-center">
            <h2>{this.state.names[this.state.i]}</h2>
            <img
              src={this.state.resultImg[this.state.i]}
              alt="charecter-img"
              className="mb-3 img-thumbnail rounded img-pic"
            ></img>
          </div>
        ) : this.state.isIllegal ? (
          <div className="alert alert-warning">
            <p>Name not found in GOT API! Please try again.</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Search;
