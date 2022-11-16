import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function PokemonScreen() {
  return (
    <View style={styles.container}>
      <Text>pokemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 10
  }
});
