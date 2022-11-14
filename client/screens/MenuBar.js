import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MenuBar() {

  const selectedColor = (routes) => {
    switch(routes) {
      case 'Home' : return '#90B9F5'
      case 'List' : return '#8390D6'
      case 'Date' : return '#9890EB'
      case 'Settings' : return '#9F83D6'
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            switch(route.name) {
              case "Home" : iconName = focused ? 'home' : 'home';
              break;
              case "Settings" : iconName = focused ? 'ios-settings' : 'ios-settings';
              break;
              case "List" : iconName = focused ? 'list' : 'list-outline';
              break;
              case "Date" : iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
            }

            return <Ionicons name={iconName} size={35} color={color} style={focused === true ? styles.MenuBarBottom : ""}/>
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: selectedColor(route.name),
            paddingBottom : 5,
            paddingTop : 5,
            height : 70
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          headerStyle: {
            backgroundColor: selectedColor(route.name),
          },
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="List" component={SettingsScreen} />
      <Tab.Screen name="Date" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> 
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuBarBottom : {
    borderWidth: 2,
    borderLeftWidth : 2,
    borderRightWidth: 2,
    borderTopWidth : 2,
    borderRightColor : 'white',
    borderBottomColor : 'white',
    paddingLeft : 4
  }
});