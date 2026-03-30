// javascript
// src/Api/Client.js
import axios from 'axios';

const baseURL =
    (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_BASE_URL) ||
    (typeof window !== 'undefined' && window.__REACT_APP_API_BASE_URL) ||
    'https://localhost:7061/api';

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    config.headers = config.headers || {};
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export function setToken(token) {
    if (typeof window !== 'undefined' && token) localStorage.setItem('token', token);
}

export function clearToken() {
    if (typeof window !== 'undefined') localStorage.removeItem('token');
}

export default api;