import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function YugiohScreen() {

    const test = async () => {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const resultat = await response.json();
        console.log(resultat.data[0])
        for (let test of resultat.data) {
          console.log(test.id)
        }
    }
    test()

  return (
    <View style={styles.container}>
      <Text>Yugioh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 10
  }
});
