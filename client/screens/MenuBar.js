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
      break;
      case 'List' : return 'blue'
      break;
      case 'Date' : return 'green'
      break;
      case 'Settings' : return 'black'
      break;
    }
  }

  return (
    <Tab.Navigator
     tabBarColor={{ backgroundColor: '#694fad' }}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;
            let selectedTabBarActive = false

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
              selectedTabBarActive = true
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              selectedTabBarActive = true
            } else if (route.name === 'List') {
              selectedTabBarActive = true
            } else if (route.name === 'Date') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              selectedTabBarActive = true
            }

            // You can return any component that you like here!
            console.log(route.name)
            return <View style={selectedTabBarActive === true ? styles.MenuBar : ""}>
              <Ionicons name={iconName} size={size} color={color}/>
            </View>;
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
  MenuBar : {
    borderBottomWidth: 5,
    borderBottomColor : 'aqua'
    
  }
});