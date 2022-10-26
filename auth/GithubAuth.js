import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

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
    (request
    ?
    <View style={styles.container}>
      <TouchableOpacity
          styles={styles.buttonGithub}
          onPress={() => {
            promptAsync();
          }}>
          <Image
            source={require('../assets/logo-auth/logo-github.png')}
            style={styles.imageGithub}
          />
        </TouchableOpacity>
        <Button
        styles={styles.buttonGithub}
        disabled={!request}
        title="sign in Github"
        onPress={() => {
          promptAsync();
        }}/>
    </View>
    :
    ""
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginTop: 10,
    marginButtom: 10,
  },
  imageGithub : {
    width: 40,
    height: 40,
  },
  buttonGithub: {
    backgroundColor: "black !important",
    flexDirection: "row",
  }
});