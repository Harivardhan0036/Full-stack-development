import React, { useState } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const NavigationForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  const handleToggleForm = () => {
    setShowSignupForm((prev) => !prev);
  };

  return (
    <Paper elevation={3} style={{ padding: 0, maxWidth: 'Auto' }}>
      <Typography variant="h5" gutterBottom>
        {showSignupForm ? '' : ''}
      </Typography>
      {showSignupForm ? <SignupForm /> : <LoginForm />}
      <Button variant="outlined" color="primary" fullWidth onClick={handleToggleForm}>
        {showSignupForm ? 'Already have an account? Login' : 'Donot have an account Signup'}
      </Button>
    </Paper>
  );
};

export default NavigationForm;