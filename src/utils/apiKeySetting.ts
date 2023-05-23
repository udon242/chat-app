import { createContext, useContext, useEffect, useState } from 'react';
import * as storage from '../utils/storage';
import { useNavigation } from '@react-navigation/native';
import { ApiKeySettingScreenNavigationProp } from './navigation';

type ApiKeySetting = {
  apiKey: string;
  onChange: (text: string) => void;
};

export const ApiKeySettingContext = createContext<ApiKeySetting>({
  apiKey: '',
  onChange: () => {}
});

export const useApiKeySettingContext = (): ApiKeySetting => {
  const [apiKey, setApiKey] = useState('');
  const { navigate } = useNavigation<ApiKeySettingScreenNavigationProp>();

  useEffect(() => {
    const loadStorage = async () => {
      const storageApiKey = await storage.getApiKey();
      setApiKey(storageApiKey);
      if (!storageApiKey) {
        navigate('ApiKeySetting');
      }
    };
    loadStorage();
  }, []);
  const onChange = (text: string) => {
    storage.setApiKey(text);
    setApiKey(text);
  };
  return {
    apiKey,
    onChange
  };
};

export const useApiKeySetting = () => {
  return useContext(ApiKeySettingContext);
};
