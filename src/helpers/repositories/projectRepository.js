import http from "../http";

export function showProject(id, callback) {
  http.get(`/api/projects/${id}`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro'));
}
