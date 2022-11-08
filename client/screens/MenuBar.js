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

  return (
    <Tab.Navigator
     tabBarColor={{ backgroundColor: '#694fad' }}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

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
            console.log(route.name)
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
              backgroundColor: route.name === 'Home' ? "blue" :'green',
              paddingBottom : 10,
              paddingTop : 10,
              height : 60,
              borderBottomWidth: 5,
              borderBottomColor : 'aqua'
            },
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} style={styles.MenuBar}/>
      <Tab.Screen name="List" component={SettingsScreen} />
      <Tab.Screen name="date" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      
    </Tab.Navigator>
    //   <Tab.Navigator
    //     initialRouteName="Home"
    //     activeColor="red"
    //     inactiveColor="black"
    //     tabBarStyle={{ backgroundColor: 'bleu' }}
    //     screenOptions={{
    //       tabBarStyle: {
    //         backgroundColor: 'green',
    //       },
    //     }}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuBar : {
    borderBottomWidth: 5,
    borderBottomColor : 'aqua'
  }
});