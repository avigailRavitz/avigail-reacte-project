import './Login.css'
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import '../admin/Admin'
import AdminPage from '../adminPage/AdminPage';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AdminData from '../../store/AdminData';
import { useEffect } from 'react';
import Store from '../../store/Store';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [incorect, setIncorect] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  console.log(password)
  console.log(name)

  
  useEffect(() => {
    if(localStorage.getItem("isLogin")==="true")
      AdminData.setIsLogin(true);
  }, [])
  const handleLogin = async () => {
    console.log('login');

    const response = await fetch("http://localhost:8787/login", {// כתיבה עם fetch
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText)

    if (response.status === 200) {
      setName("")
      setPassword("")
localStorage.setItem("isLogin",true);
AdminData.setIsLogin(true)    }
    else {
      setName("")
      setPassword("")
      setIncorect(true)
    }
  }
  return (
    <>
      <div className="container">
      <h1>Login</h1>
      <div className="form-control">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={name}
            onChange={(e) => setName(e.target.value)}
            endAdornment={
              <InputAdornment position="end">

              </InputAdornment>
            }
            label="name"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}

                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button  className="submit-btn" variant="outlined" onClick={handleLogin}>submit</Button>
        {incorect ? <Alert severity="error">This is error— check it out!</Alert> : <></>}
      </Box>
      </div>
      </div>
    </>
  );

}

