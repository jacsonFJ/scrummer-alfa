import http from "../http";

export function listInvites(callback) {
  http.get('/api/invites')
    .then(response => callback(response.data.data))
    .catch(() => console.error('Erro ao listar convites'));
}

export function acceptInvite(id, callback) {
  http.post(`/api/invites/${id}/accept`)
    .then(() => callback())
    .catch(() => console.error('Erro ao aceitar convite'));
}

export function refuseInvite(id, callback) {
  http.post(`/api/invites/${id}/refuse`)
    .then(() => callback())
    .catch(() => console.error('Erro ao rejeitar convite'));
}
