import React from 'react';
import { 
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
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

  validateAndSend(e) {
    e.preventDefault();

    this.setState({ attempt: true }, () => {
      if (this.allIsValid()) {
        this.props.send();
      }
    })
  }

  render () {
    return (
      <form method="POST">
        <Grid container spacing={3} className="feedback-form">
          <Grid item xs={12}>
            <Typography component="paragraph" variant="subtitle1" color="textSecondary">Fields marked as * are required.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              className="feedback-form__first-name"
              margin="normal"
              required
              fullWidth
              id="firstname"
              name="firstname"
              label="First name"
              onChange={(e) => this.setState({ fname: e.target.value })}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              className="feedback-form__last-name"
              margin="normal"
              required
              fullWidth
              id="lastname"
              name="lastname"
              label="Last name"
              onChange={(e) => this.setState({ lname: e.target.value })}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              className="feedback-form__email"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              error={!!this.state.email && !this.isValidEmail(this.state.email)}
              onChange={(e) => this.setState({ email: e.target.value })}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              className="feedback-form__phone"
              margin="normal"
              required
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              error={!!this.state.phone && !this.isValidPhone(this.state.phone)}
              onChange={(e) => this.setState({ phone: e.target.value })}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              className="feedback-form__company"
              margin="normal"
              fullWidth
              id="company"
              name="company"
              label="Company"
              onChange={(e) => this.setState({ company: e.target.value })}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              className="feedback-form__postcode"
              margin="normal"
              fullWidth
              required
              id="postcode"
              name="postcode"
              label="Postcode"
              error={!!this.state.postcode && !this.isValidPostcode(this.state.postcode)}
              onChange={(e) => this.setState({ postcode: e.target.value })}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl 
              className="feedback-form__priority"
              fullWidth 
              id="postcode"
              name="postcode"
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
          <Grid item xs={12}>
            <TextField 
              className="feedback-form__feedback"
              margin="normal"
              fullWidth
              multiline
              required
              id="feedback"
              name="feedback"
              label="Your Feedback"
              rows="4"
              defaultValue="Dear Sir/Madam..."
              error={!this.state.feedback && this.state.attempt}
              onChange={(e) => this.setState({ feedback: e.target.value })}
              />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="feedback-form__submit"
              type="submit"
              fullWidth
              id="submit"
              name="submit"
              variant="contained"
              color="primary"
              onClick={(e) => this.validateAndSend(e)}
              disabled={!this.allIsValid()}
            >
              Send Feedback
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default FeedbackForm;