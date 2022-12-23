import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { ApiPokemonTGC } from '../../API/ApiPokemonTGC';

export default function PokemonScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <ApiPokemonTGC />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});
