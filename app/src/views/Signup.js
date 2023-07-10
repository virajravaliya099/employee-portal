import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';

export default function Signup() {
  const [type, setType] = useState('employee');
  const handleSubmit = () => {
    alert('Submit clicked');
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up as {type}
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setType('employee')}
            >
              Employee
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setType('company')}
              sx={{ justifyItems: 'content' }}
            >
              Company
            </Button>
          </Grid>
        </Grid>
        {type === 'company' ? (
          <Box
            component={'form'}
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  autoFocus
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" required fullWidth label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  required
                  fullWidth
                  label="Password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Signup
            </Button>
            <Grid container justifyContent={'end'}>
              <Grid item>
                <Link to={'/login'}>Already have an account? Sign In</Link>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            component={'form'}
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  autoFocus
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" required fullWidth label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  required
                  fullWidth
                  label="Password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Signup
            </Button>
            <Grid container justifyContent={'end'}>
              <Grid item>
                <Link to={'/login'}>Already have an account? Sign In</Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
