import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text>You can check each price, the cards Pokemon or Yugioh</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 10
  },
  text: {
    textAlign : "center"
  }
});
