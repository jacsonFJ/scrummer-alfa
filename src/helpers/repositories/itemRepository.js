import http from "../http";

export function listProductBacklog(projectId, params, callback) {
  http
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
