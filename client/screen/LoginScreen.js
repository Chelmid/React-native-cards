import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import GoogleAuth from '../../auth/GoogleAuth';
import GithubAuth from '../../auth/GithubAuth';
import FacebookAuth from '../../auth/FacebookAuth';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Text>Connexion</Text>
      <GoogleAuth/>
      <GithubAuth/>
      <FacebookAuth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
