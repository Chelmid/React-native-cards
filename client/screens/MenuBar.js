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

  const selectionIcon = () => {

  }

  return (
    <Tab.Navigator style={styles.MenuBar}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            selectionIcon()
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'date') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'lightblue',
          tabBarInactiveTintColor: 'gray',
            height: 1000,
            paddingTop: 50,
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} style={styles.MenuBar}/>
      <Tab.Screen name="List" component={SettingsScreen} />
      <Tab.Screen name="date" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuBar : {
    marginBottom : 10,
    marginTop : 10,
    height: 1000,
    paddingTop: 50,
  }
});