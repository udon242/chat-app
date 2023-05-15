import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const ApiKeySetting: React.FC = () => {
  const [apiKey, setApiKey] = React.useState('');
  const onChangeText = (text: string) => {
    setApiKey(text);
  };
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="API Key"
      onChangeText={onChangeText}
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
