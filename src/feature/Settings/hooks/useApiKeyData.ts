import React from 'react';
import * as storage from '../../../utils/storage';

export const useApiKeyData = () => {
  const [apiKey, setApiKey] = React.useState('');
  React.useEffect(() => {
    const loadStorage = async () => {
      setApiKey(await storage.getApiKey());
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
