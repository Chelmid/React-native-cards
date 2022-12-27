import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokemonScreen from './PokemonScreen';
import YugiohScreen from './YugiohScreen';
import Pokeball from "../../assets/pokeball.svg"
import Yugioh from "../../assets/yugiohLogo.svg"

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
      case 'PokemonTGC' : return '#8390D6'
      case 'Yugioh' : return '#9890EB'
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
            }

            switch (route.name) {
              case "PokemonTGC":
                return <Pokeball width={60} height={35} fill={focused === true ? "red" : "black"} style={focused === true ? styles.MenuBarBottom : ""}/>
                break;

              case "Yugioh":
                return <Yugioh width={60} height={40} fill={focused === true ? "#f6b902" : "black"} style={focused === true ? styles.MenuBarBottom : ""}/>
                break;
            
              default:
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
          headerTitleAlign: 'center',
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="PokemonTGC" component={PokemonScreen} />
      <Tab.Screen name="Yugioh" component={YugiohScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> 
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuBarBottom : {
    // borderWidth: 2,
    // borderLeftWidth : 2,
    // borderRightWidth: 2,
    // borderTopWidth : 2,
    // borderRightColor : 'white',
    // borderBottomColor : 'white',
    // paddingLeft : 4
  },
  image : {
    width: '40%',
    height: '40%',
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4285f4",
  },
});