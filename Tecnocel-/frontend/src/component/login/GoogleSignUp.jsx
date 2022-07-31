import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import userActions from '../../redux/actions/userActions';

export default function GoogleSignUp() {
  const dispatch = useDispatch();

  async function handleCallbackResponse(response) {

    let userObject = jwt_decode(response.credential);

    let userData = {
      name: userObject.given_name,
      email: userObject.email,
      password: userObject.sub,
      from: 'google'
    }
    dispatch(userActions.signUpUserMessage(userData))
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '949538147455-clcn44k8oer7nk45bduuu6v4urimlcln.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'medium' }
    )

  });

  return (
    <div>
      <div id='buttonDiv'>
        <IconButton sx={{ bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.5)' } }}>
          <GoogleIcon />
        </IconButton>
      </div>
    </div>
  )


}