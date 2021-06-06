import './App.css';
import UserCard from "./components/UserCard.js"
import {connect} from 'react-redux'
import {getUserInfos} from "./redux/actions"
import {React, useEffect} from "react"
function App({users, loading, getUserInfos}) {
  console.log(users,loading)
  useEffect(()=>{
    getUserInfos()
  },[getUserInfos])
  return (
    <div className="App">
      <h1>REDUX-THUNK</h1>
      <UserCard users={users} loading={loading} />
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    loading: state.loading,

  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getUserInfos: () => dispatch(getUserInfos())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
