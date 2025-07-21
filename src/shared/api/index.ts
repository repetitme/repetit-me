const URL = import.meta.env.VITE_REPETIT_ME_URL;

export async function httpJson<T>(
  endpoint: string,
  options: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: unknown;
    params?: Record<string, string | number | boolean | undefined>;
  }
): Promise<T> {
  try {
    const response = await fetch(`${URL}/${endpoint}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body:
        options.body !== undefined ? JSON.stringify(options.body) : undefined
    });

    if (!response.ok) {
      throw new Error(`Error, статус: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Запрос не выполнен, ${err}`);
  }
}
