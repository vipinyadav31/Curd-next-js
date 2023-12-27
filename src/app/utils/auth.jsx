
import axios from 'axios';
import { parse, serialize } from 'cookie';

export const setCookie = (res, name, value, options = {}) => {
  res.setHeader('Set-Cookie', serialize(name, value, options));
};

export const getCookie = (req, name) => parse(req.headers.cookie || '')[name];

export const removeCookie = (res, name) => setCookie(res, name, '', { maxAge: -1, path: '/' });

export const isAuthenticated = async (req) => {
  const token = getCookie(req, 'authToken');

  if (token) {
    try {
      const response = await axios.get('https://staging-api.zesthrm.com/api/v1/auth/check', {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      return response.data.isAuthenticated;
    } catch (error) {
      console.error('Authentication check failed', error);
      return false;
    }
  }

  return false;
};
