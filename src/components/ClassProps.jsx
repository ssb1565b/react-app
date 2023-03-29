import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { name, age, gender } = this.props;
    console.log(name, age, gender);
    return (
      <div>
        <h1>이름 : {this.props.name} </h1>
        <h1>나이 : {this.props.age} </h1>
        <h1>성별 : {this.props.gender} </h1>
      </div>
    );
  }
}
