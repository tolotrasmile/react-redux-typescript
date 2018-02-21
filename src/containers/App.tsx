import * as React from 'react'
import { connect } from 'react-redux'
import { actions } from '../actions'
import UserList from '../components/User'
import Name from '../components/Name'
import NameThunk from '../components/NameThunk'
import NamePromise from '../components/NamePromise'

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
      <UserList name={this.props.user.name}/>
      <Name changeName={() => this.props.setName('Name : ' + JSON.stringify(Date.now()))}/>
      <NameThunk changeNameThunk={() => this.props.setNameThunk('Name Thunk: ' + JSON.stringify(Date.now()))}/>
      <NamePromise changeNamePromise={() => this.props.setNamePromise('Name Promise : ' + JSON.stringify(Date.now()))}/>
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
