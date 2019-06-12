import React from 'react';
import { connect } from 'react-redux';
import { addNum, randomPick } from './actions';

import './Select.css';

class Select extends React.Component {
  constructor(props) {
 super(props);
 this.state = {fdigit: 'select', sdigit: 'select'};
 this.handleFirstChange = this.handleFirstChange.bind(this);
 this.handleSecondChange = this.handleSecondChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
}

handleFirstChange(event) {
 this.setState({fdigit: event.target.value});
}

handleSecondChange(event) {
 this.setState({sdigit: event.target.value});
}

handleSubmit(event) {
  if(this.state.fdigit!=='select' && this.state.sdigit!=='select' && this.props.ticket.length<10 && this.props.editTicket){
    var num = parseInt(this.state.fdigit, 10) * 10 + parseInt(this.state.sdigit,10);
    if(num<=80 && num!==0){
   // alert('Your lucky number is ' + num);
     this.props.addNum(num);
    }
  }
  event.preventDefault();
}
  render() {
    return(
      <div className="ui container">
          <form onSubmit={this.handleSubmit}>
            <div className="halfrow">
              <label>
                <h3 className="primary">Choose first digit for your lottery number:</h3>
                  <select value={this.state.fdigit} onChange={this.handleFirstChange} className="fdigit">
                    <option selected value="select">select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
              </label>
            </div>
                        <div className="halfrow">
    <label>
                <h3 className="primary">Choose second digit for your lottery number:</h3>
    <select value={this.state.sdigit} onChange={this.handleSecondChange} className="fdigit">
    <option selected value="select">select</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    </select>
    </label>
</div>
<div className="row">
    <input type={this.props.editTicket? "submit": "hidden"} value="Pick" className="submit"/>
    <input type={this.props.editTicket? "button": "hidden"} value="Random Pick" className="submit" onClick={()=>this.props.randomPick()}/>
    </div>
    </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {ticket: state.ticket, editTicket: state.editTicket};
}
export default connect(mapStateToProps,{ addNum, randomPick })(Select);
