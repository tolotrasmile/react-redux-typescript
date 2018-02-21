const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'CHANGE_USERNAME' :
      return { ...state, name: action.payload }
    case 'CHANGE_USERNAME_FULFILLED' :
      return { ...state, name: action.payload }
  }
  return state || {}
}

export default reducer
