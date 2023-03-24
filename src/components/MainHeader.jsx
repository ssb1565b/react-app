import React, { Component } from "react";

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }
  render() {
    return <h1>Hello,{this.cas ? "캬" : ""}</h1>;
  }
}
export default MainHeader;

// function MainHeader() {
// const cas = true
//   return <div>Hello {cas ? "캬":""} world</div>;
// }
// export default MainHeader;
