import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useApiKeySetting } from '../../utils/apiKeySetting';

const ApiKeySetting = () => {
  const { apiKey, onChange } = useApiKeySetting();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>API Key</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="input API Key"
          onChangeText={onChange}
          value={apiKey}
        />
      </View>
    </View>
  );
};
export default ApiKeySetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold'
  },
  form: {
    width: 280
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12
  }
});
