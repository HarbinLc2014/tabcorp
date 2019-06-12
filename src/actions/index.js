export const addNum = num => {
  return { type: 'add', payload: num };
};

export const draw = () => {
  return { type: 'draw', payload: null };
}

export const drawOneNum = () => {
  return { type: 'drawOne', payload: null }
}

export const clearTicket = () => {
  return { type: 'clearTicket', payload: [] };
}

export const clearDraw = () => {
  return { type: 'clearDraw', payload: [] }
}

export const removeNum = num => {
  return { type: 'remove', payload: num };
}

export const disableEdit = () => {
  return { type: 'disable', payload: null }
}

export const enableEdit = () => {
  return { type: 'enable', payload: null };
}

export const randomPick = () => {
  return { type: 'randomPick', payload: null };
}
