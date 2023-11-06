import http from "../http";

export function showProject(id, callback) {
  http().get(`/api/projects/${id}`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro'));
}

export function listProjectUsers(id, callback) {
  http().get(`/api/projects/${id}/users`)
    .then(response => callback(response.data.data))
    .catch(() => console.error('Erro nos usuários do projeto'));
}

export function changeUserRole(projectId, userId, roleId) {
  http().patch(
    `/api/projects/${projectId}/users/${userId}/role`,
    {role_id: roleId}
  );
}

export function removeUserFromProject(projectId, userId, callback) {
  http().delete(`/api/projects/${projectId}/users/${userId}`)
    .then(() => callback())
    .catch(() => console.error('Erro ao remover usuário do projeto'));
}
