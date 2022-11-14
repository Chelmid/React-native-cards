import { StyleSheet, Text, View} from 'react-native';
import GoogleAuth from '../../auth/GoogleAuth';
import GithubAuth from '../../auth/GithubAuth';
import FacebookAuth from '../../auth/FacebookAuth';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuBar from './MenuBar';

export default function SignInScreen() {

  const [userConnexion, setUserConnexion]  = useState({connexion : true})

  const userData = data => {setUserConnexion(data)};

  
  console.log(userConnexion)
  return (
    <View style={styles.positionMenubar}>
      {Object.values(userConnexion).length <= 0
      ?
      <View style={styles.centerSignIn}>
        <Text>Choix de la connexion</Text>
        <GoogleAuth  onChange={userData}/>
        <GithubAuth/>
        <FacebookAuth/>
      </View>
      :
      <View style={styles.positionMenubar}>
        <NavigationContainer>
          <MenuBar />
        </NavigationContainer>
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  positionMenubar: {
    left: 0,
    bottom: 0,
    right: 0,
    flex:1
  },
  centerSignIn: {
    position: 'absolute',
    left: 100,
    right: 0,
    top : '45%'
  }
});
