import { combineReducers } from 'redux';

const ticketReducer = (ticket = [], action) => {
  if (action.type === 'add' && !ticket.includes(action.payload) && ticket.length<10 && action.payload <= 80 && action.payload > 0) {
    return [...ticket, action.payload].sort(function(a, b){return a - b});
  }
  else if(action.type === 'remove' && ticket.includes(action.payload)){
    let newTicket = [];
    ticket.map((num)=>{
      if(action.payload !== num){
        newTicket.push(num);
      }
    });
    return newTicket.sort(function(a, b){return a - b});
  }
  else if(action.type === 'clearTicket'){
    return action.payload;
  }
  else if(action.type === 'randomPick'){
    let res = [];
    var i =0;
    for (i = 0; i < 10; i++){
      var num = Math.floor(Math.random() * Math.floor(80)) + 1;
      if(!res.includes(num)){
        res.push(num);
      }
      else{
        i = i-1;
      }
    }
    return res.sort(function(a, b){return a - b});
  }
  return ticket.sort(function(a, b){return a - b});
}

const drawReducer = (drawResult = [], action) => {
  switch(action.type){
    case 'draw':
      let res = [];
      var i =0;
      for (i = 0; i < 20; i++){
        var num = Math.floor(Math.random() * Math.floor(80)) + 1;
        if(!res.includes(num)){
          res.push(num);
        }
        else{
          i = i-1;
        }
      }
      console.log('RES: ', res);
      return res.sort(function(a, b){return a - b});
    case 'clearDraw':
      return [];
    case 'drawOne':
      if(drawResult.length<20){
        var flag = true;
        while(flag){
          var num = Math.floor(Math.random() * Math.floor(80)) + 1;
          if(!drawResult.includes(num)){
            flag = false;
            return [...drawResult, num].sort(function(a, b){return a - b});
          }
        }
      }
      return [...drawResult];
    default:
      return drawResult.sort(function(a, b){return a - b});
  }
}

const editReducer = (editTicket = true, action) => {
  switch(action.type){
    case 'disable':
      return false;
    case 'enable':
      return true;
    default:
      return editTicket;
  }
}

export default combineReducers({
  ticket: ticketReducer,
  drawResult: drawReducer,
  editTicket: editReducer
});
