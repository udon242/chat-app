import { Message } from './Message';

export type ChatCompletionsApiResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    message: Message;
    finish_reason: string;
    index: number;
  }[];
};
