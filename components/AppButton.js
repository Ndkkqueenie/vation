import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function AppButton({ title, onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    paddingTop: 12,
    paddingLeft: 8,
    height: 40,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 25,
    backgroundColor: '#6C9DFE',
    borderRadius: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  }
});
