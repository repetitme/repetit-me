const URL = process.env.REPETIT_ME_URL;

async function httpJson<T>(path: string): Promise<T> {

  const response = await fetch(`${URL}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
    }    
  })
  .then(response => {
    if (!response.ok) {
      return response.json()
        .catch(() => response.text())
    }})
    
  if (!response.ok) {
    throw new Error(`Error, status: ${response.status}`);
  }
  return response.json() as Promise<T>;

  
}