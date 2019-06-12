import React from 'react';
import { connect } from 'react-redux';
import { draw, drawOneNum, enableEdit, disableEdit, clearDraw } from './actions';

import './Draw.css';

class Draw extends React.Component {
  constructor(props){
    super(props);
    this.state = { drawing: false };
  }
  renderDraw = () => {
    if(this.props.drawResult.length>0){
      return this.props.drawResult.map((num, index)=>{
        return <span key={index} className="draw">{num}</span>
      });
    }
    else{
      return <div className="empty"></div>;
    }
  }
  drawSeq = () => {
    if(!this.state.drawing){
      this.props.disableEdit();
      this.props.clearDraw();
      this.setState({ drawing: true });
      var i = 0;
      this.drawOneNum(i);
    }
  }
  drawOneNum = (i) => {
    if(i<20){
      setTimeout(()=>{
        this.props.drawOneNum();
        this.drawOneNum(i+1);
      }, 2000);
    }
    else{
      this.setState({ drawing: false });
      this.props.enableEdit();
    }
  }
  render() {
    return (
      <div className="ui container">
          <h3 className="title">Draw Result:</h3>
          {this.renderDraw()}
          <div className="ui row">
            <input type={this.props.editTicket? "button": "hidden"} value="Draw" className="submit" onClick={()=>{
              if(!this.state.drawing){
                this.props.clearDraw();
                this.props.draw();
              }
            }}/>
            <input type={this.props.editTicket? "button": "hidden"} value="Draw Sequentially" className="submit" onClick={this.drawSeq}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { drawResult: state.drawResult, editTicket: state.editTicket }
}

export default connect(mapStateToProps, { draw, drawOneNum, enableEdit, disableEdit, clearDraw })(Draw);
