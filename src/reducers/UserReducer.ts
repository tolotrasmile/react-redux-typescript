const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'CHANGE_USERNAME' :
      return { ...state, name: action.payload }
    case 'CHANGE_USERNAME_THUNK' :
      return { ...state, name: action.payload }
    case 'CHANGE_USERNAME_PROMISE_FULFILLED' :
      return { ...state, name: action.payload }
  }
  return state || {}
}

export default reducer
