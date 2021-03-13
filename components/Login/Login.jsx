
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import { CircularProgress } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
      height: "100%",  
    },
   
    paper: {
      margin: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),  
    },
  }));



const Login = () => {
    const classes = useStyles();

  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const loginUser = event => {
    event.preventDefault();
    setLoading(true);
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username.toLocaleUpperCase() === 'ADMIN' && password.toLocaleUpperCase() === 'ADMIN') {
      setAuth(true);
      setLoading(false);

      if (auth) {
        router.push('/template');
      }

    } else {
      setAuth(false);
      setLoading(false);
    }

  }


  
  return (
      <>
                
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={loginUser}>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id='username'
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id='password'
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
            />

        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
                {!loading && 'login'.toLocaleUpperCase()}
                {loading && <CircularProgress size={20} color='inherit' />}
            </Button>
           
          </div>
          </form>
        </div>
      </Grid>
    </Grid>





   </>
  );

  }
export default Login;