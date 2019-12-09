import React from 'react';
import { 
  Container, 
  CssBaseline, 
  Typography
} from '@material-ui/core';

import FeedbackForm from '../FeedbackForm';

class Feedback extends React.Component {
  state = {
    sent: false
  }

  render () {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography component="h1" variant="h5" gutterBottom={true}>Feedback Form</Typography>
        {
          this.state.sent 
            ? <Typography component="h2" variant="h6">Thank you for your feedback</Typography>
            : <FeedbackForm send={() => this.setState({ sent: true })}/>
        }
      </Container>
    );
  }
}

export default Feedback;