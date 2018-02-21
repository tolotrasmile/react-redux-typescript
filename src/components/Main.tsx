import * as React from 'react'

interface IProps {
  changeName: (userName: string) => void
  changeNameThunk: (userName: string) => void
  changeNamePromise: (userName: string) => void
}

const Main = (props: IProps) => {
  return <div>
    <h1>Main component</h1>
    <button onClick={() => props.changeName('')}>Change user name</button>
    <br/>
    <button onClick={() => props.changeNameThunk('')}>Change user with thunk</button>
    <br/>
    <button onClick={() => props.changeNamePromise('')}>Change user with promise</button>
  </div>
}

export default Main
