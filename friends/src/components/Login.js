import React from 'react'
import axios from 'axios'


class Login extends React.Component {
  state = {
    profile: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      profile: {
        ...this.state.profile,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", this.state.profile)
      .then(res => {
        console.log("Login.js: I got you a dollar", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends");
      })
      .catch(err => console.log("Login.js: You gotta be quicker than that:", err.message))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.profile.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.profile.password}
            onChange={this.handleChange}

          />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;