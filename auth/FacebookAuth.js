import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import { Button, StyleSheet } from 'react-native';
import SignInButtom from './SignInButtom'

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '<YOUR FBID>',
    responseType: ResponseType.Code,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <SignInButtom
    src={require('../assets/logo-auth/logo-facebook.png')}
    title="sign in facebook"
    onPress={() => {
      promptAsync();
    }}
    container={styles.container}
    image={styles.imageFacebook}
    //request={!request}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginButtom: 10
  },
  imageFacebook : {
    width: 40,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4285f4",
  },
  buttonFacebook: {

  }
});
