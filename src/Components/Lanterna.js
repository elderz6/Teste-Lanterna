import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Bateria from './Bateria.js';
import './Lanterna.css';

class Lanterna extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFlashOn:false,
      status:'Off',
      canTurnOn: true
    }
    this.flashOn = this.flashOn.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  flashOn(){
    if (this.state.canTurnOn) {
      if (!this.state.isFlashOn) {
        this.setState({
          isFlashOn:true,
          status:'On'
        });
      }else{
        this.setState({
          isFlashOn:false,
          status:'Off'
        });
      }
    }else {
      this.setState({
        isFlashOn:false,
        status:'Off'
      });
    }}

  checkStatus(bateria){
    if (bateria === 0) {
      this.setState({
        canTurnOn: false
      });
    }else {
      this.setState({
        canTurnOn:true
      });
    }
  }


  render() {
    const status = this.state.status;
    return (
      <div>
        <div>
          <Button onClick={this.flashOn} className="onOff"> On/Off </Button> <br />
          <Bateria props={this.state} verify={this.flashOn} turnOn={this.checkStatus}/>
           <p> Status {status} </p>
        </div>
      </div>
    );
  }

}

export default Lanterna;
