import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_API_KEY = 'api_key';
const STORAGE_MODEL_KEY = 'model_setting';

async function getItem(key: string): Promise<string> {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) {
      return '';
    }
    return value;
  } catch (e) {
    console.error(`key:${key} get error`);
    return '';
  }
}

async function setItem(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(`key:${key} save error`);
  }
}

export async function getApiKey(): Promise<string> {
  return getItem(STORAGE_API_KEY);
}

export async function getModel(): Promise<string> {
  return getItem(STORAGE_MODEL_KEY);
}

export async function setApiKey(value: string): Promise<void> {
  return setItem(STORAGE_API_KEY, value);
}

export async function setModel(value: string): Promise<void> {
  return setItem(STORAGE_MODEL_KEY, value);
}
