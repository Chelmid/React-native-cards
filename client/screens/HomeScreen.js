import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pokeball from "../../assets/pokeball.svg"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>helloooooooooooo</Text>
      <Pokeball width={120} height={40} fill="red"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 10
  }
});
