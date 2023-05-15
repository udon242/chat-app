type Role = 'user' | 'system' | 'assistant';

export type Message = {
  role: Role;
  content: string;
};
