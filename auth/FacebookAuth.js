import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuth() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '781347252583-m4b7qsstf4q9qh3q29bo0h2gt9ru6lbv.apps.googleusercontent.com',
    androidClientId: '781347252583-erv92apa8966angup055nic1gar37i7n.apps.googleusercontent.com',
    webClientId: '781347252583-m4b7qsstf4q9qh3q29bo0h2gt9ru6lbv.apps.googleusercontent.com',
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
