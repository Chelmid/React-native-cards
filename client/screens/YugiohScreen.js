import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import ApiYugioh from '../../API/ApiYugioh'

export default function YugiohScreen() {

  return (
    <SafeAreaView>
      <ScrollView>
        {ApiYugioh()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  stretch: {
    width: 100,
    height: 150,
    resizeMode: 'stretch'
  },
  row: {
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
