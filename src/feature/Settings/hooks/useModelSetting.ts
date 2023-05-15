import React from 'react';
import useSWR from 'swr';

import * as storage from '../../../utils/storage';
import { getOpenAIApi } from '../../../api/openAI';

function convertData(apiResponse: { data: { id: string }[] }) {
  return apiResponse.data
    .filter((model) => model.id.startsWith('gpt'))
    .map((model) => ({ label: model.id, value: model.id }));
}

async function fetcher(url: string) {
  const response = await getOpenAIApi<{ data: { id: string }[] }>(url);
  return convertData(response);
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
    '/v1/models',
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
