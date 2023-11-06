import http from "../http";

export function listSprintMeetings(sprintId, params, callback) {
  http()
    .get('/api/meetings', {
      params: {
        sprint_id: sprintId,
        ...params
      }
    })
    .then(response => callback(response.data))
    .catch(error => console.error(error));
}

export function showMeeting(meetingId, callback) {
  http().get(`/api/meetings/${meetingId}`)
    .then(response => callback(response.data.data))
    .catch(error => console.error(error));
}

export function deleteMeeting(meetingId, callback) {
  http().delete(`/api/meetings/${meetingId}`)
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function addUserToMeeting(meetingId, userId, callback) {
  http().post(`/api/meetings/${meetingId}/users`, {user_id: userId})
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function removeUserFromMeeting(meetingId, userId, callback) {
  http().delete(`/api/meetings/${meetingId}/users/${userId}`)
    .then(() => callback())
    .catch(() => alert('Erro!'));
}

export function meetingHistory(id, callback) {
  http().get(`/api/meetings/${id}/history`)
    .then(response => callback(response.data.data))
    .catch(() => alert('Erro no histórico!'));
}

export function meetingComment(id, data, callback) {
  http().post(`/api/meetings/${id}/comments`, data)
    .then(() => callback())
    .catch(() => alert('Erro no comentário!'));
}
