import http from "../http";

export function showCurrentSprint(projectId, callback) {
  http.get(`/api/projects/${projectId}/sprints/current`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro!'));
}

export function showSprint(projectId, sprintId, callback) {
  http.get(`/api/projects/${projectId}/sprints/${sprintId}`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro!'));
}

export function closeSprint(projectId, callback) {
  http.post(`/api/projects/${projectId}/sprints/close`)
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function listIncrements(projectId, params, callback) {
  http.get(`/api/projects/${projectId}/sprints/closeds`, {params})
    .then(response => callback(response.data))
    .catch(() => alert('Erro!'));
}
