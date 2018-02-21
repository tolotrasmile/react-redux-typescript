import * as React from 'react'

interface IProps {
  changeNameThunk: (userName: string) => void
}

const NameThunk = (props: IProps) => {
  return <div>
    <h2>Name thunk component</h2>
    <button onClick={() => props.changeNameThunk('')}>Change user with thunk</button>
  </div>
}

export default NameThunk
