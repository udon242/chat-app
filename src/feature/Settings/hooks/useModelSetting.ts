import React from 'react';
import useSWR from 'swr';

import { createHeaders } from '../../../utils/api';
import * as storage from '../../../utils/storage';

function convertData(apiResponse: { data: { id: string }[] }) {
  return apiResponse.data
    .filter((model) => model.id.startsWith('gpt'))
    .map((model) => ({ label: model.id, value: model.id }));
}

async function fetcher(url: string) {
  const apiKey = await storage.getApiKey();
  const options = {
    headers: await createHeaders(apiKey)
  };
  const response = await fetch(url, options);
  console.log(`[API] models API response status: ${response.status}`);
  if (response.status !== 200) {
    throw new Error('fetch error');
  }
  return convertData(await response.json());
}

export const useModelSetting = () => {
  const [model, setModel] = React.useState('');
  const onModelChange = (value: string | null) => {
    if (value) {
      storage.setModel(value);
    }
  };
  React.useEffect(() => {
    storage.getModel().then((model) => {
      setModel(model);
    });
  }, []);
  const { data, error } = useSWR<{ label: string; value: string }[]>(
    'https://api.openai.com/v1/models',
    fetcher
  );
  return {
    modelOptions: data,
    error,
    model,
    setModel,
    onModelChange
  };
};
