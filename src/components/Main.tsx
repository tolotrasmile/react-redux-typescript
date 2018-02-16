import * as React from 'react'

interface IProps {
  changeName: (userName: string) => void
}

const Main = (props: IProps) => {
  return <div>
    <h1>Main component</h1>
    <button onClick={() => props.changeName('')}>Change user name</button>
  </div>
}

export default Main
