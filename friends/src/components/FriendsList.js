import React from 'react'
import { axiosWithAuth } from '../axiosWithAuth';
import Friends from './Friends'
import FriendsForm from './FriendsForm';


class FriendsList extends React.Component {
  state = {
    friends: [],
    isLoading: true
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  getData = async () => {
    try {
      let res = await axiosWithAuth().get("/friends");
      let data = res.data;
      console.log(data)
      this.setState({
        friends: data
      });
    } catch (err) {
      throw new Error(err);
    }
  }


  postData = e => {
    e.preventDefault();
    const friend = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        console.log("FriendsForm: passed", res.data)
        this.setState({
          friends: res.data
        })
        console.log("state", this.state.friends)
      })
      .catch(err => console.log("FriendsForm: failed", err))
  };

  componentDidMount() {
    this.getData();
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <div>
        <div>
          <FriendsForm
            postData={this.postData}
            handleChanges={this.handleChanges}
          />
        </div>
        <div>
          {this.state.friends === 0 ? (
            <div>Loading...</div>
          ) : (
              this.state.friends.map(list => (
                <Friends
                  key={list.id}
                  name={list.name}
                  age={list.age}
                  email={list.email}
                />
              ))
            )}
        </div>
      </div>
    )
  }
}

export default FriendsList;

// {
//   this.state.doggos.map(doggo => (
//     <img width={doggo} src={doggo} key={doggo} alt={doggo} />
//   ))
// }