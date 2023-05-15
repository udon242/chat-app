import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useApiKeyData } from './hooks/useApiKeyData';

const ApiKeySetting: React.FC = () => {
  const { apiKey, onChange } = useApiKeyData();
  return (
    <View style={styles.container}>
      <Text>API Key</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="API Key"
        onChangeText={onChange}
        value={apiKey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default ApiKeySetting;
