import React, { Component } from 'react';
import { Progress, Button } from 'reactstrap';


class Bateria extends Component {
  constructor(props){
    super(props);
    this.state = {
      bateria:100,
      isOn: this.props.props.isFlashOn
    }
    this.drainBattery = this.drainBattery.bind(this);
    this.resetBattery = this.resetBattery.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    clearInterval(this.interval);

    this.setState({
      isOn:nextProps.props.isFlashOn
    });
      this.drainBattery();
  }


  drainBattery(){
    if (this.state.bateria > 0) {
      this.interval = setInterval(() => {
      const date = this.state.bateria;
      this.state.isOn && this.state.bateria > 0 ? this.setState({
        bateria: date - 1
      }) : this.stop();
    }, 1000);
    }
  }

    resetBattery(){
      this.setState({
        bateria: 100
      },this.props.turnOn(100)
      );
    }

    stop(){
      clearInterval(this.interval);
      if (this.state.bateria === 0) {
        this.props.turnOn(this.state.bateria);
        this.props.verify();
      }
    }


  render() {
    const bateria = this.state.bateria;
    return (
      <div>
        <div className="bar">
         <div className="text-center"> Bateria {bateria} %</div>
         <Progress color='warning' value={bateria} /> <br />
         <Button onClick={this.resetBattery} > Trocar Bateria </Button> <br />
       </div>
      </div>
    );
  }

}

export default Bateria;
