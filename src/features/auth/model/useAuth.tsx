import httpRequest from '../../../shared/api/httpRequest';

const useAuth = () => {
  const login = async (username: string, password: string) => 
   httpRequest<{ token: string }>('POST', '/auth/login', {
      body: { username, password }
    })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('access_token', data.token);
        }
        return data;
      })
      .catch((err) => {
        throw new Error(`Login failed: ${err.message}`);
      });

  const logout = async () => {
    httpRequest<void>('POST', '/auth/logout')
      .then(() => {
        localStorage.removeItem('access_token');
      })
      .catch((err) => {
        throw new Error(`Logout failed: ${err.message}`);
      });
  };

  const register = async (username: string, password: string) =>
    httpRequest<{ token: string }>('POST', '/auth/register', {
      body: { username, password }
    })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('access_token', res.token);
        }
        return { success: true };
      })
      .catch((err) => {
        throw new Error(`Registration failed: ${err.message}`);
      });

  return { login, logout, register };
};

export default useAuth;
