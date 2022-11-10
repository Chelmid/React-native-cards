import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
      case 'Home' : return 'red'
      case 'List' : return 'blue'
      case 'Date' : return 'green'
      case 'Settings' : return 'black'
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            switch(route.name) {
              case "Home" : iconName = focused ? 'ios-home' : 'ios-home';
              break;
              case "Settings" : iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
              case "List" : iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
              case "Date" : iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
            }

            return <Ionicons name={iconName} size={size} color={color} style={focused === true ? styles.MenuBarBottom : ""}/>
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
              backgroundColor: selectedColor(route.name),
              paddingBottom : 5,
              paddingTop : 5,
              height : 60
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
    borderBottomWidth: 5,
    borderBottomColor : 'aqua'
  }
});