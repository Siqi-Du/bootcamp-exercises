import { Component } from 'react';
// ES 2022
// class based component is storeed on the instance itself, not on fiberNode
export class CarEditRow extends Component {

  // constructor(props){
  //   super(props);
  // class property -- ES2022
  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: this.props.car.year,
    color: this.props.car.color,
    price: this.props.car.price,
  };

    // class arrow function -- ES2022
    // this.change = this.change.bind(this);
    // this.saveCar = this.saveCar.bind(this);
  // };

  change = (e) =>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  };

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    })
  };

  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" name="make" value={this.state.make} onChange={this.change} /></td>
        <td><input type="text" name="model" value={this.state.model} onChange={this.change} /></td>
        <td><input type="text" name="year" value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" name="color" value={this.state.color} onChange={this.change} /></td>
        <td><input type="text" name="price" value={this.state.price} onChange={this.change} /></td>
        <td>
          <button type="button" onClick={this.saveCar} >save</button>
          <button type="button" onClick={this.props.onCancelCar} >cancel</button>
        </td>
      </tr>
    );
  };

};