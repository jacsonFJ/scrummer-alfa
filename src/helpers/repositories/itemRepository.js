import http from "../http";

export function listProductBacklog(projectId, params, callback) {
  http()
    .get('/api/items/product-backlog', {
      params: {
        per_page: 10,
        project_id: projectId,
        ...params
      }
    })
    .then(response => callback(response.data))
    .catch(error => {
      console.error('Erro no product backlog');
      console.error(error);
    });
}

export function listSprintBacklog(sprintId, params, callback) {
  http()
    .get('/api/items/sprint-backlog', {
      params: {
        sprint_id: sprintId,
        ...params
      }
    })
    .then(response => callback(response.data))
    .catch(error => console.error(error));
}

export function listSprint(sprintId, params, callback) {
  http()
    .get('/api/items/sprint', {
      params: {
        sprint_id: sprintId,
        ...params
      }
    })
    .then(response => callback(response.data))
    .catch(error => console.error(error));
}

export function showItem(id, callback) {
  http().get(`/api/items/${id}`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro!'));
}

export function deleteItem(id, callback) {
  http().delete(`/api/items/${id}`)
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function addUserToItem(itemId, userId, callback) {
  http().post(`/api/items/${itemId}/users`, {user_id: userId})
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function removeUserFromItem(itemId, userId, callback) {
  http().delete(`/api/items/${itemId}/users/${userId}`)
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function changeItemStage(itemId, stageId, callback) {
  http().patch(`/api/items/${itemId}/stages`, {stage_id: stageId})
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function itemHistory(id, callback) {
  http().get(`/api/items/${id}/history`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro no histórico!'));
}

export function itemComment(id, data, callback) {
  http().post(`/api/items/${id}/comments`, data)
    .then(() => callback())
    .catch(() => alert('Erro no comentário!'));
}
