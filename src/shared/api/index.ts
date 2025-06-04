const URL = process.env.REPETIT_ME_URL;

export async function httpJson<T>(path: string): Promise<T> {
  const response = await fetch(`${URL}/${path}`, {
    headers: {
      'Content-Type': 'application/json'
    }
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
