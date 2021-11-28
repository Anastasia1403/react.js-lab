export default function authHeader() {
  const tokenData = JSON.parse(localStorage.getItem('tokenData'));

  if (tokenData && tokenData.access_token) {
    return { Authorization: `Bearer ${tokenData.access_token}` };
  }
  return {};
}
