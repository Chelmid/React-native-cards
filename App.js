import { StyleSheet, Text, View} from 'react-native';
import SiginInScreen from './client/screens/SignInScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './client/screens/HomeScreen'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SiginInScreen />
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
