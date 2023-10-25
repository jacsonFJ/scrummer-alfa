import http from "../http";

export function showCurrentSprint(projectId, callback) {
  http.get(`/api/projects/${projectId}/sprints/current`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro!'));
}

export function closeSprint(projectId, callback) {
  http.post(`/api/projects/${projectId}/sprints/close`)
    .then(() => callback())
    .catch(() => alert('Erro!'));
}
