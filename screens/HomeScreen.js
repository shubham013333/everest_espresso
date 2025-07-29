import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../assets/logo.svg'; // ✅ Import the SVG as a React component

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Everest Espresso</Text>
      <Logo width={220} height={220} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
