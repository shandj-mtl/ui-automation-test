import React from 'react';
import { 
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';

class FeedbackForm extends React.Component {
  state={
    fname: '',
    lname: '',
    email: '',
    phone: '',
    company: '',
    postcode: '',
    priority: 1,
    feedback: '',
    attempt: false,
    sent: false
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
  }

  isValidPhone(phone) {
    return /[0-9]{11}/.test(phone);
  }
  
  isValidPostcode(postcode) {
    return /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(postcode);
  }

  allIsValid() {
    const {
      fname,
      lname,
      email,
      phone,
      postcode,
      feedback
    } = this.state

    return fname && lname && email && this.isValidEmail(email) && phone && this.isValidPhone(phone) && postcode && this.isValidPostcode(postcode) && feedback
  }

  validateAndSend() {
    this.setState({ attempt: true }, () => {
      if (this.allIsValid()) {
        this.props.send();
      }
    })
  }

  render () {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            required
            fullWidth
            label="First name"
            error={!this.state.fname && this.state.attempt}
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            required
            fullWidth
            label="Last name"
            error={!this.state.lname && this.state.attempt}
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            required
            fullWidth
            label="Email Address"
            error={(!!this.state.email && !this.isValidEmail(this.state.email)) || (!this.state.email && this.state.attempt)}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            error={(!!this.state.phone && !this.isValidPhone(this.state.phone)) || (!this.state.phone && this.state.attempt)}
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            fullWidth
            label="Company"
            onChange={(e) => this.setState({ company: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            fullWidth
            required
            label="Postcode"
            error={(!!this.state.postcode && !this.isValidPostcode(this.state.postcode)) || (!this.state.postcode && this.state.attempt)}
            onChange={(e) => this.setState({ postcode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl 
            fullWidth 
            margin="normal"
            onChange={(e) => this.setState({ priority: e.target.value })}
          >
            <InputLabel htmlFor="priority">Priority</InputLabel>
            <Select
              native
            >
              <option value={1}>Normal</option>
              <option value={2}>High</option>
              <option value={3}>Urgent</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            margin="normal"
            fullWidth
            multiline
            required
            label="Your Feedback"
            rows="4"
            defaultValue="Dear Sir/Madam..."
            error={!this.state.feedback && this.state.attempt}
            onChange={(e) => this.setState({ feedback: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.validateAndSend()}
            disabled={!this.allIsValid()}
          >
            Send Feedback
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default FeedbackForm;