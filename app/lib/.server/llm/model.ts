import { createAnthropic } from '@ai-sdk/anthropic';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    baseURL: 'https://api.302.ai/v1',
    apiKey,
  });

  return anthropic('claude-3-5-sonnet-20240620');
}
