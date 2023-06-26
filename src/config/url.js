export const API_BASE_URL = 'https://codersx-swagger.glitch.me';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl('/api/auth/login');
