import * as React from 'react'

interface IProps {
  changeName: (userName: string) => void
}

const Name = (props: IProps) => {
  return <div>
    <h2>Name component</h2>
    <button onClick={() => props.changeName('')}>Change user name</button>
  </div>
}

export default Name
