import * as actions from './index'

describe('actions', () => {
  it('Add number action', () => {
    const num = 1
    const expectedAction = {
      type: 'add',
      payload: 1
    }
    expect(actions.addNum(num)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('Remove number action', () => {
    const num = 1
    const expectedAction = {
      type: 'remove',
      payload: 1
    }
    expect(actions.removeNum(num)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('Draw action', () => {
    const expectedAction = {
      type: 'draw',
      payload: null
    }
    expect(actions.draw()).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('Clear ticket action', () => {
    const expectedAction = {
      type: 'clearTicket',
      payload: []
    }
    expect(actions.clearTicket()).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('Clear draw action', () => {
    const expectedAction = {
      type: 'clearDraw',
      payload: []
    }
    expect(actions.clearDraw()).toEqual(expectedAction)
  })
});
