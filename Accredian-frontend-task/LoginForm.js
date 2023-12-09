import React, { useRef, useState } from "react";
import { TextField, Button, Box, Typography,Link } from '@mui/material';
import SignupForm from "./SignupForm";
import Validation from "../Components/SignupFormValidation"

function LoginForm () {
    const [ usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
  const [ values,  setValues] = useState({
    usernameOrEmail : '',
    password : ''
  })
  
  const [errors, setErrors] = useState({});
  const handleInput = (event)=> {

    setValues(prve => ({...prve,[event.target.label]: [event.target.value]}))
  };
     
 const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === ""&& errors.email === "" && errors.password === "") {
        axios.post('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=signupform&table=signup',values)
        .then(res => {
          navigate('/login');
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
            margin={"Auto"}
            padding={3}
            justifyContent={"center"} 
            borderRadius={3}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
                ":hover" :{
                    boxShadow:"10px 10px 20px #ccc"
                },
            }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Username or Email"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail (e.target.value)}
                    onSubmit={errors.usernameOrEmail && <span className='text-danger'> {errors.usernameOrEmail} </span>}
                    margin="normal"/>
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) =>  setPassword (e.target.value)} 
                    onSubmit={errors.password && <span className='text-danger'> {errors.password} </span>}
                    margin="normal"/>
                <Button  type = "Submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Login
                </Button>
            </Box>
        </form>
    </div>
  );
};
export default LoginForm;