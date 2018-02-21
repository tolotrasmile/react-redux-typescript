export const changeName = (name: string) => ({ type: 'CHANGE_USERNAME', payload: name })

export function changeNamePromise (name: string) {
  return {
    type: 'CHANGE_USERNAME_PROMISE',
    payload: new Promise((resolve: any, reject: any) => {
      setTimeout(() => resolve(name), 1000)
    })
  }
}

export function changeNameThunk (name: string) {
  return (dispatch: any) => {
    setTimeout(() => dispatch({ type: 'CHANGE_USERNAME_THUNK', payload: name }), 1000)
  }
}
