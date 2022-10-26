import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuth() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.comm',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response; 
      console.log(authentication)
    }
  }, [response]);

  return (
    <View style={styles.container} >
      <TouchableOpacity
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
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4285f4",
    marginTop: 10,
    marginButtom: 10,
  },
  imageGoogle : {
    width: 40,
    height: 40
  },
  buttonGoogle: {

  }
});
