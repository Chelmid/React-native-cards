import React from 'react';
import { Button } from 'react-native';
import { useGoogleAuth } from './googleAuth';

const LoginButton = () => {

    const { signIn } = useGoogleAuth();

    return (
        <Button onClick={signIn} title="Login"></Button>
      );
};

export default LoginButton;