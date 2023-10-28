import http from "../http";

export function listSprintMeetings(sprintId, params, callback) {
  http
    .get('/api/meetings', {
      params: {
        sprint_id: sprintId,
        ...params
      }
    })
    .then(response => callback(response.data))
    .catch(error => console.error(error));
}
