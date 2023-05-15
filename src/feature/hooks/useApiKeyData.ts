import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'api_key';

async function getStorageData(): Promise<string> {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value === null) {
      return '';
    }
    return value;
  } catch (e) {
    console.error('API Key get error');
    return '';
  }
}

async function setStorageData(value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value);
  } catch (e) {
    console.error('API Key save error');
  }
}

export const useApiKeyData = () => {
  const [apiKey, setApiKey] = React.useState('');
  React.useEffect(() => {
    const loadStorage = async () => {
      setApiKey(await getStorageData());
    };
    loadStorage();
  }, []);
  const onChange = (text: string) => {
    setStorageData(text);
    setApiKey(text);
  };
  return {
    apiKey,
    onChange
  };
};
