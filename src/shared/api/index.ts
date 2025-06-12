const URL  = import.meta.env.VITE_REPETIT_ME_URL


export async function httpJson<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
    config?: {
      params?: Record<string, string | number | boolean | undefined>;
      body?: unknown;
      headers?: Record<string, string>;  
    }
  ): Promise<T> {
  const response = await fetch(`${URL}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
    body: config?.body !== undefined ? JSON.stringify(config.body) : undefined
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
