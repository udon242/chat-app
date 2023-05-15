export async function createHeaders(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`
  };
}
