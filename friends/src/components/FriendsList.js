import React from 'react'
import { axiosWithAuth } from '../axiosWithAuth';


class Friends extends React.Component {
  state = {
    friendList: [],
    isLoading: false
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log('FriendList.js: you got a friend in me:', res)
        this.setState({
          friendList: res.data.friends
        })
      })
      .catch(err => console.log("FriendList.js: one is the loneliest number:", err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.friendList.map((object, index) => (
          <div className="friends-list">
            <p key={index}>{object}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Friends;

// {
//   this.state.doggos.map(doggo => (
//     <img width={doggo} src={doggo} key={doggo} alt={doggo} />
//   ))
// }