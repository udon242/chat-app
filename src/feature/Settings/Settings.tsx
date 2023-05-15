import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useApiKeyData } from './hooks/useApiKeyData';
import { useModelSetting } from './hooks/useModelSetting';

const Settings: React.FC = () => {
  const { apiKey, onChange } = useApiKeyData();
  const { model, setModel, onModelChange, modelOptions } = useModelSetting();
  const [modelPickerOpen, setModelPickerOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>API Key</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="API Key"
            onChangeText={onChange}
            value={apiKey}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Model</Text>
        <View style={styles.form}>
          <DropDownPicker
            setValue={setModel}
            onChangeValue={onModelChange}
            value={model}
            items={modelOptions || []}
            open={modelPickerOpen}
            setOpen={setModelPickerOpen}
          />
        </View>
      </View>
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
  row: {
    width: 500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 12
  },
  label: {
    width: 60
  },
  form: {
    width: 400
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12
  }
});

export default Settings;
