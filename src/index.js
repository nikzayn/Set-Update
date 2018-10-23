import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Room extends Component {
  state = {
    isLit: true
  };

  flipBoard = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };
  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
          <img
            src="https://image.flaticon.com/icons/svg/149/149743.svg"
            width='200px'
            height='200px'
          />
        <br />
        <button className="rombut" onClick={this.flipBoard}>
          flip
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
