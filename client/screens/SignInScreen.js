import { StyleSheet, Text, View} from 'react-native';
import GoogleAuth from '../../auth/GoogleAuth';
import GithubAuth from '../../auth/GithubAuth';
import FacebookAuth from '../../auth/FacebookAuth';
import { useState } from 'react';
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function SignInScreen() {

  const [userConnexion, setUserConnexion]  = useState({})

  const userData = data => {setUserConnexion(data)};

  
  console.log(userConnexion)
  return (
    <View style={styles.container}>
      {Object.values(userConnexion).length <= 0
      ?
      <View>
        <Text>Choix de la connexion</Text>
        <GoogleAuth  onChange={userData}/>
        <GithubAuth/>
        <FacebookAuth/>
      </View>
      :
      <Text>Hello</Text>
      }
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
