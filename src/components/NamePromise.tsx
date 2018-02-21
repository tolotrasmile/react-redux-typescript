import * as React from 'react'

interface IProps {
  changeNamePromise: (userName: string) => void
}

const NamePromise = (props: IProps) => {
  return <div>
    <h2>Name Promise component</h2>
    <button onClick={() => props.changeNamePromise('')}>Change user with promise</button>
  </div>
}

export default NamePromise
