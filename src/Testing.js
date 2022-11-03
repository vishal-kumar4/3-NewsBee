import React, { Component } from 'react'

export default class Testing extends Component {
    c="This is a var variable ..";
    cb={a:'b',b:'c'}
    render() {
        return (
      <div>Yo wassup bros and brochachos {this.c } and {this.cb}</div>
    )
  }
}
