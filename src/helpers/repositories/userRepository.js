import http from "../http";

export function showMe() {
  return http.get('/api/users/me');
}

export function logoutMe() {
  return http.post('/api/logout');
}
