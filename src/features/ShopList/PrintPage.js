import React, { Component } from "react";

class PrintPage extends Component {
  render() {
    return (
      <table style={{margin: '30px', width: "100%", fontSize: "20px"}}>
        <thead>
          <tr>
          <th>Amount</th>
          <th>Unit</th>
          <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map(item => <tr key={`${item.id}-${item.unit}`}>
            <td>{item.amount}</td>
            <td>{item.unit}</td>
            <td>{item.name}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}


export default PrintPage;