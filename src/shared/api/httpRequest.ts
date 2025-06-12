export function httpRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
  config?: {
    params?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    headers?: Record<string, string>;
  }
): Promise<T> {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
    params: config?.params,
    body: config?.body !== undefined ? JSON.stringify(config.body) : undefined
  };

  return httpJson<T>(endpoint, options);
}
async function httpJson<T>( endpoint: string, options: any) { return {endpoint, options} as T}