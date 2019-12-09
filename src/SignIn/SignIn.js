import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    noUsername: false,
    noPassword: false,
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  getPasswordHelperText() {
    if (this.state.noPassword) return 'Please enter a password.';
    if (this.props.failedLogIn) return 'Please enter a valid username/password';
    return '';
  }
  
  doSignIn(e) {
    e.preventDefault();
    this.setState({ 
      noUsername: !this.state.username,
      noPassword: !this.state.password
    })

    if (this.state.username && this.state.password) {
      this.props.validate({
        username: this.state.username,
        password: this.state.password
      });
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" className="signin-form">
        <CssBaseline />
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form method="POST">
          <TextField 
            className="signin-form__username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            ref="username"
            label="Username"
            name="username"
            autoComplete="username"
            error={this.state.noUsername}
            helperText={this.state.noUsername ? 'Please provie a username.' : ''}
            autoFocus
            onChange={(e) => this.updateUsername(e)}
          />
          <TextField 
            className="signin-form__password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label="Password"
            name="password"
            autoComplete="password"
            error={this.state.noPassword || this.props.failedLogIn}
            helperText={this.getPasswordHelperText()}
            onChange={(e) => this.updatePassword(e)}
          />
          <Button
            className="signin-form__submit"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => this.doSignIn(e)}
          >
            Sign In
          </Button>
        </form>
      </Container>
    );
  }
}

export default SignIn;
