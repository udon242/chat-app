import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { useApiKeyData } from './hooks/useApiKeyData';

const ApiKeySetting: React.FC = () => {
  const { apiKey, onChange } = useApiKeyData();
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="API Key"
      onChangeText={onChange}
      value={apiKey}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default ApiKeySetting;
