import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

`

const WelcomeStyle = styled.div`
  width: 50%;
  height: 100%;
  background: #70bbff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
`

const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  height: 5%;
  width: 100%;
  justify-content: center;

`

const InputStyle = styled.input`
  width: 25%;
  border-radius: 10px;
  border: .5px solid grey;
  background: none;
  outline: none;
  margin: 0 5px;
  

`

const ButtonStyle = styled.button`
  width: 15%;
  border-radius: 10px;
`

const SignUpContainer = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: center;
  align-content: center;
`

const StyledButton = styled.button`
  border-radius: 20px;
  margin: 10px 0;
  height: 30px;
`


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
      <Container className='login-container'>
        <WelcomeStyle className='welcome-container'>
          <p>Add a list of Friends.</p>
          <p>See what they're up to.</p>
          <p>Join the conversation.</p>
        </WelcomeStyle>
        <FormContainer className='forms-container'>
          <FormStyle className='Forms-Forms' onSubmit={this.login}>
            <InputStyle
              type="text"
              name="username"
              value={this.state.profile.username}
              onChange={this.handleChange}
            />
            <InputStyle
              type="password"
              name="password"
              value={this.state.profile.password}
              onChange={this.handleChange}

            />
            <ButtonStyle>Login</ButtonStyle>
          </FormStyle>
          <SignUpContainer>
            <div>
              <h3>See what freinds your are closes too.</h3>
              <p>Join MyFriends</p>
            </div>
            <ButtonContainer className='button-buttons'>
              <StyledButton>Sign Up</StyledButton>
              <StyledButton>Log in</StyledButton>
            </ButtonContainer>
          </SignUpContainer>
        </FormContainer>
      </Container >
    )
  }
}

export default Login;