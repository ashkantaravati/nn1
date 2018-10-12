import React, { Component } from 'react';
import './App.css';

let colorMap = new Map();
colorMap.set('red', 'bg-danger');
colorMap.set('green', 'bg-success');
colorMap.set('blue', 'bg-primary');

class App extends Component {
  
  render() {
    return (
      <MainContent/>
    );
  }
}
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : "red"
    }
    this.colorUpdateHandler = this.colorUpdateHandler.bind(this);
  }
  colorUpdateHandler(e,newColor) {
    e.preventDefault()
    this.setState({
      color: newColor
    })
 
  }
  render() {
    return (
      <div>

      <DynamicDiv color={this.state.color}/>
      <div className="row">
      <div className="col">
      <ChangerButton handler = {this.colorUpdateHandler} actionName="green"/>
      
      </div>
      <div className="col">
      <ChangerButton handler = {this.colorUpdateHandler} actionName="red"/>
      
      </div>
      <div className="col">
      <ChangerButton handler = {this.colorUpdateHandler} actionName="blue"/>
      
      </div>

      </div>
      </div>
    )
  }
}
class ChangerButton extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-outline" onClick = {(e)=> this.props.handler(e,this.props.actionName)}
        >
        {this.props.actionName}
        </button>
      </div>
    )
  }
}
class DynamicDiv extends Component {
  render() {
    return (
      <div className={colorMap.get(this.props.color)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam illum dolores ipsa, soluta illo, incidunt magni in eaque dolore, voluptatem sequi neque ipsam repellendus tenetur vel molestiae esse voluptas vero.
      </div>
    )
  }
}


export default App;
