import reducer from './index';

describe('ticketReducer', () => {
  it('Reducer should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        ticket: [],
        drawResult: []
      }
    )
  })
  //
  it('Number can be added to empty ticket queue with ascending order', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[25]
      }, {
        type: 'add',
        payload: 1
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: [1,25]
      }
    )
  })

  it('Ticket number is unique', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[1]
      }, {
        type: 'add',
        payload: 1
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: [1]
      }
    )
  })

  it('Number cannot be added when ticket queue is full', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[1,2,3,4,5,6,7,8,9,10]
      }, {
        type: 'add',
        payload: 11
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: [1,2,3,4,5,6,7,8,9,10]
      }
    )
  })

  it('Number cannot be greater than 80', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[1]
      }, {
        type: 'add',
        payload: 81
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: [1]
      }
    )
  })

  it('Number cannot be less than 1', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[1]
      }, {
        type: 'add',
        payload: -1
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: [1]
      }
    )
  })

  it('Number removed correctly', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[1,2,3]
      }, {
        type: 'remove',
        payload: 1
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: [2,3]
      }
    )
  })

  it('Ticket cleared correctly', () => {
    expect(
      reducer({
        drawResult:[],
        ticket:[1,2,3,4,5,6,7,8,9,10]
      }, {
        type: 'clearTicket',
        payload: []
      })
    ).toEqual(
      {
        drawResult:[],
        ticket: []
      }
    )
  })

})

describe('drawReducer', () => {
  it('Draw result contains 20 elements', () => {
    expect(reducer({drawResult:[], ticket:[]}, {type: 'draw', payload: null}).drawResult.length).toEqual(20)
  })
  it('Draw clear successfully', () => {
    expect(reducer({drawResult:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], ticket:[]}, {type: 'clearDraw', payload: null})).toEqual({drawResult:[], ticket:[]})
  })
})
