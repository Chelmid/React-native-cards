import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ApiPokemonTGC } from '../../API/ApiPokemonTGC';

export default function PokemonScreen() {
  return (
    <View style={styles.container}>
      <ApiPokemonTGC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 10
  }
});
