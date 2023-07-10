import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import Copyright from '../components/Copyright';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'employee',
  });

  const handleChange = (event) => {
    setForm((form) => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  };

  const withFetchCall = async () => {
    await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await withFetchCall();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={form.email}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
          />

          <InputLabel id="role">Role</InputLabel>
          <Select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            fullWidth
          >
            {[
              { id: 'employee', name: 'Employee' },
              { id: 'company', name: 'Company' },
            ].map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Enter the role here</FormHelperText>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
