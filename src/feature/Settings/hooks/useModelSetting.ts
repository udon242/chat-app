import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import useSWR from 'swr';

import * as storage from '../../../utils/storage';
import { ApiKeySettingScreenNavigationProp } from '../../../utils/navigation';
import { getOpenAIApi } from '../../../api/openAI';
import { useApiKeySetting } from '../../../utils/apiKeySetting';

function convertData(apiResponse: { data: { id: string }[] }) {
  return apiResponse.data
    .filter((model) => model.id.startsWith('gpt'))
    .map((model) => ({ label: model.id, value: model.id }));
}

async function fetcher(url: string) {
  const response = await getOpenAIApi<{ data: { id: string }[] }>(url);
  return convertData(response);
}

const useApiErrorNavigation = (error: Error) => {
  const { navigate } = useNavigation<ApiKeySettingScreenNavigationProp>();
  useEffect(() => {
    if (error) {
      navigate('ApiKeySetting');
    }
  }, [error]);
};

export const useModelSetting = () => {
  const { apiKey } = useApiKeySetting();
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
    ['/v1/models', apiKey],
    (key: [string, string]) => fetcher(key[0])
  );

  useApiErrorNavigation(error);

  return {
    modelOptions: data,
    error,
    model,
    setModel,
    onModelChange
  };
};
