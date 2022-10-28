import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, StyleSheet } from 'react-native';
import SignInButtom from './SignInButtom'

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/',
};

export default function GithubAuth() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'clientId',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'com.exemple.projectDeux'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code);
    }
  }, [response]);

  return (
    <View>
        <SignInButtom
        src={require('../assets/logo-auth/logo-github.png')}
        title="sign in Github"
        onPress={() => {
          promptAsync();
        }}
        container={styles.container}
        image={styles.imageGithub}
        //request={!request}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginButtom: 10
  },
  imageGithub : {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginButtom: 10,
    marginRight: 5
  },
  buttonGithub: {
    
  }
});