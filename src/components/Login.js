import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function Login() {
    const handleLogin = (response) => {
        console.log(response);
        axios.post('/api/auth/google', { token: response.tokenId })
            .then(res => console.log('Login Success', res))
            .catch(err => console.log('Login Failed', err));
    };

    return (
        <div>
            <h2>Login with Google</h2>
            <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default Login;
