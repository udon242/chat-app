import * as storage from '../utils/storage';

export async function postOpenAIApi<R>(
  apiPath: string,
  body: string
): Promise<R> {
  const options = {
    method: 'post',
    headers: await createHeaders(),
    body
  };
  const response = await fetch(`https://api.openai.com${apiPath}`, options);
  console.log(
    `[API] ${apiPath} status: ${response.status}, request: ${JSON.stringify(
      options
    )}`
  );
  if (response.status !== 200) {
    throw new Error(`${apiPath} API error`);
  }
  const jsonResponse = await response.json();
  console.log(`[API] ${apiPath} response:`, jsonResponse);
  return jsonResponse;
}

export async function getOpenAIApi<R>(apiPath: string): Promise<R> {
  const options = {
    method: 'get',
    headers: await createHeaders()
  };
  const response = await fetch(`https://api.openai.com${apiPath}`, options);
  console.log(
    `[API] ${apiPath} status: ${response.status}, request: ${JSON.stringify(
      options
    )}`
  );
  if (response.status !== 200) {
    throw new Error('fetch error');
  }
  const jsonResponse = await response.json();
  console.log(`[API] ${apiPath} response:`, jsonResponse);
  return jsonResponse;
}

async function createHeaders() {
  const apiKey = await storage.getApiKey();
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`
  };
}
