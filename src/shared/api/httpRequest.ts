import { httpJson } from './httpJson';

export function httpRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
  config?: {
    params?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
  }
): Promise<T> {
  const options = {
    method,
    params: config?.params,
    body: config?.body !== undefined ? JSON.stringify(config.body) : undefined
  };

  return httpJson<T>(endpoint, options);
}

export default httpRequest;