import React from 'react';
import { connect } from 'react-redux';
import { removeNum } from './actions';

import './Display.css';

class Display extends React.Component {
  componentDidMount() {
    console.log('Ticket: ', this.props.ticket);
  }

  renderTicket = () => {
    if(this.props.ticket.length>0){
      return this.props.ticket.map((num, index)=>{
        return <span key={index} className={this.props.drawResult.includes(num) && this.props.ticket.length===10 ? "match" : "num"} onClick={()=>{
          if(this.props.editTicket){
            this.props.removeNum(num);
          }
        }
        }>{num}</span>
      });
    }
    else{
      return <div className="empty"></div>;
    }
  }

  render() {
    return (
      <div className="ui container">
        <h3 className="title">Your Selected Numbers (Click a number to remove it from ticket):</h3>
        {this.renderTicket()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ticket: state.ticket, drawResult: state.drawResult, editTicket: state.editTicket };
};


export default connect(mapStateToProps, { removeNum })(Display);
