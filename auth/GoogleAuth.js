import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import SignInButtom from './SignInButtom'

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuth(props) {

  const [userGoogle, setUserGoogle] = useState({})

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication)
      if(Object.values(authentication).length > 0){
        setUserGoogle(authentication)
        props.onChange(userGoogle);
      }

      if(props.onChange(userGoogle)){
        setUserGoogle(authentication)
        props.onChange(userGoogle);
      }
    }
  }, [response, props.onChange]);

  return (
    <View>
      <SignInButtom
        src={require('../assets/logo-auth/logo-google.jpg')}
        title="sign in Google"
        onPress={() => {
          promptAsync();
        }}
        container={styles.container}
        image={styles.imageGoogle}
        //request={!request}
      />
      {/* <TouchableOpacity
          styles={styles.buttonGoogle}
          onPress={() => {
            promptAsync();
          }}>
          <Image
            source={require('../assets/logo-auth/logo-google.jpg')}
            style={styles.imageGoogle}
          />
        </TouchableOpacity>
        <Button
        styles={styles.buttonGoogle}
        disabled={!request}
        title="sign in Google"
        onPress={() => {
          promptAsync();
        }}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginButtom: 10
  },
  imageGoogle : {
    width: 40,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4285f4",
  },
  buttonGoogle: {

  }
});
