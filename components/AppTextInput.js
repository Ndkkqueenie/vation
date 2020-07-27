import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function AppTextInput({
 handlePasswordVisibility,
  ...otherProps
}) {
  return (
    <View>
      
      <TextInput
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /* custom css for login page implemented accordingly*/
  input: {
    backgroundColor: 'rgba(142, 142, 147, 0.28)',
    display: 'flex',
    paddingTop: 10,
    height: 45,
    paddingLeft: 12,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    borderRadius: 40
  }
});

