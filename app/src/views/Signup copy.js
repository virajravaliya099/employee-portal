import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {
  Container,
  ButtonGroup,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const [type, setType] = useState('employee');
  const [companyData, setCompanyData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submit button clicked');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={2} sx={{ mt: 10, width: '100%' }}>
        <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Typography component="h1" variant="h5">
            Sign up as {type}
          </Typography>
        </Grid>
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
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        {type === 'employee' ? (
          <Grid item xs={12}>
            <FormHelperText>Select your company</FormHelperText>
            <Select
              id="role"
              name="role"
              //   value={form.role}
              //   onChange={handleChange}
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
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login">{'Already have an account? Sign in'}</Link>
          </Grid>
        </Grid>
        <Grid item xs={12} justifyItems={'center'}>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </Container>
  );
}
