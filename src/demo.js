/*import React, { Component } from "react";

class email extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a {this.props.email}!</h2>;
    }
}
export default email;*/

import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Demo extends Component {
    constructor() {
      super();
      console.log("something");
      this.state = {color: "blue", type:"hummer"};
      this.person = {firstname: "john"};
    }
    render() {
      return <h2>I am {this.person.firstname} and I have a {this.state.color} {this.state.type} Car!</h2>;
    }
}

export default Demo;