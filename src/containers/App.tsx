import * as React from 'react'
import UserList from '../components/User'
import Main from '../components/Main'
import { connect } from 'react-redux'
import { actions } from '../actions'

interface IState {
  userName: string
}

class App extends React.Component<any, IState> {

  constructor (props: any) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  render () {
    return <div>
      <Main
        changeName={() => this.props.setName(JSON.stringify(Date.now()))}
        changeNameThunk={() => this.props.setNameThunk(JSON.stringify(Date.now()))}
        changeNamePromise={() => this.props.setNamePromise(JSON.stringify(Date.now()))}
      />
      <UserList name={this.props.user.name}/>
    </div>
  }

}

const mapStateToProps = (state: any) => ({ user: state.user })
const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  setName: (name: string) => {
    dispatch(actions.userActions.changeName(name))
  },
  setNameThunk: (name: string) => {
    dispatch(actions.userActions.changeNameThunk(name))
  },
  setNamePromise: (name: string) => {
    dispatch(actions.userActions.changeNamePromise(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
