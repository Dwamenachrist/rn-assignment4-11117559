import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native-paper';

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor="#c2c3c8"
        outlineColor="#c2c3c8"  // Set outline color
        activeOutlineColor="#c2c3c8" // Set active outline color
        mode="outlined"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#ffffff',
  },
});
