// export const changeName = (name: string) => ({ type: 'CHANGE_USERNAME', payload: name })
import 'whatwg-fetch'

export function changeName (name: string) {
  return {
    type: 'CHANGE_USERNAME',
    payload: new Promise((resolve: any, reject: any) => {
      setTimeout(() => resolve(name), 5000)
    })
  }
}
