const URL  = import.meta.env.VITE_REPETIT_ME_URL


export async function httpJson<T>(
  endpoint: string,
  options: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: unknown;
    params?: Record<string, string | number | boolean | undefined>;
  } 
  ): Promise<T> {
  const response = await fetch(`${URL}/${endpoint}`, {
    method:options.method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (!response.ok) {
        throw new Error(`Error, status: ${response.status}`);
      }
    })
    .catch((err) => {
      throw new Error(`Запрос не выполнен ,${err}`);
    });
  return response;
}
