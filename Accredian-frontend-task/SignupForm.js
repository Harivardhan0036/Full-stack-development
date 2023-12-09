import React, { useState } from 'react';
import { TextField, Button, Box, Typography , Link} from '@mui/material';
import LoginForm from './LoginForm';
import { call } from 'function-bind';
import {SignFormValadation} from './SignupFormValidation';
import { values } from 'regenerator-runtime';
import Validation from '../Components/SignupFormValidation';

function  SignupForm () {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ values,  setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''

  })
  
  const [errors, setErrors] = useState({});
  const handleInput = (event)=> {

    setValues(prve => ({...prve,[event.target. name]: [event.target.value]}))
  };
     
 const handleSubmit = (event) => {
  event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === ""&& errors.email === "" && errors.password === "") {
      axios.post('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=signupform&table=signup',values)
      .then(res => {
        navigate('/signup');
      })
      .catch(err => console.log(err))
    }
     
     
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection={"column"} 
          alignItems={"center"}
          maxWidth={500}
           margin={"auto"}
            padding={3}
            justifyContent={"center"} 
            borderRadius={3}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover" :{
                  boxShadow:"10px 10px 20px #ccc"
              },
          }}>
            <Typography variant="h5" alignItems={"center"}>
                SignUp
            </Typography>
            <TextField
            label="Username"
            required
            value={username}
            onChange={(e) =>   setUsername(e.target.value)}
             
            margin="normal"
            />
            <TextField
            type="email"
            label="Email"
            required
            value={email}
            onChange={(e) =>  setEmail(e.target.value)}
            event={errors.email && <span className='text-danger'> {errors.email} </span>}
            margin="normal"
            />
            <TextField
            type="password"
            label="Password"
            required
            value={password}
            onChange={(e) =>   setPassword(e.target.value)}
            event={errors.password && <span className='text-danger'> {errors.password} </span>}
            margin="normal"
            />
            <TextField
            type="password"
            label="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) =>   setConfirmPassword(e.target.value)}
            event={errors.confirmPassword && <span className='text-danger'> {errors.confirmPassword} </span>}
            margin="normal"
            />
            <Button type="Submit"variant="outlined" color="info"  onClick={handleSubmit}>
                Sign Up
            </Button>
          </Box>
        </form>
    </div>
  );
};

export default SignupForm;