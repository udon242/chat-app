import { useMemo, useState } from 'react';

import { Message } from '../../../types/Message';
import { getModel } from '../../../utils/storage';
import { postOpenAIApi } from '../../../api/openAI';
import { ChatCompletionsApiResponse } from '../../../types/ChatCompletionsApiResponse';

async function callApi(messages: Message[]) {
  const requestBody = {
    model: await getModel(),
    messages
  };
  return await postOpenAIApi<ChatCompletionsApiResponse>(
    '/v1/chat/completions',
    JSON.stringify(requestBody)
  );
}

export const useChat = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [sending, setSending] = useState(false);
  const buttonDisable = useMemo(() => {
    return !currentInput || sending;
  }, [currentInput, sending]);
  const onChangeCurrentInput = (value: string) => {
    if (sending) return;
    setCurrentInput(value);
  };

  const sendMessage = async () => {
    if (!currentInput) return;

    setSending(true);
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: currentInput }
    ];
    const response = await callApi(newMessages);
    const assistantMessage = response?.choices?.[0]?.message;
    if (assistantMessage) {
      setMessages([...newMessages, assistantMessage]);
    }
    setCurrentInput('');
    setSending(false);
  };
  return {
    currentInput,
    onChangeCurrentInput,
    messages,
    sendMessage,
    buttonDisable
  };
};
