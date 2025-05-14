export function httpRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  config?: {
    params?: Record<string, string | number>;
    body?: Record<string, unknown>;
  }
): Promise<T> {
  const options = {
    method,
    params: config?.params,
    body: config?.body ? JSON.stringify(config.body) : undefined
  };

  return httpJson<T>(endpoint, options);
}

// todo: добавить импорт httpJson после её реализации