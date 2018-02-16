import * as React from 'react'

interface IProps {
  name: string
}

const User = (props: IProps) => {
  return <div>
    <h1>User list component</h1>
    <h2>{props.name}</h2>
  </div>
}

export default User
