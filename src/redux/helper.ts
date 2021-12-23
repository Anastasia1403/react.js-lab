import { AxiosRequestHeaders } from 'axios';

export default function authHeader(): AxiosRequestHeaders | undefined {
  const tokenData = localStorage.getItem('tokenData');

  if (tokenData && JSON.parse(tokenData).access_token) {
    return { Authorization: `Bearer ${JSON.parse(tokenData).access_token}` };
  }
  return undefined;
}
