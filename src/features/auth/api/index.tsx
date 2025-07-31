import httpRequest from '../../../shared/api/httpRequest';

export const loginAPI = (data: { tg: string; code: string }) => {
  return httpRequest('POST', 'auth/login', {
    body: data
  });
}

export const registerAPI = (data: {
  tg: string;
  name: string;
  code: string;
}) => {
  return httpRequest('POST', 'auth/register', {
    body: data
  });
};
