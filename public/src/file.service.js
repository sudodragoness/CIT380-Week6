const BASE_API_URL = 'http://localhost:3000/api';
const FILE_API = `${BASE_API_URL}/files`; // http://localhost:3000/api/files

const FILES_API = `${BASE_API_URL}/files`; // http://localhost:3000/api/files

const uploadFile = (formData) =>
  _post(`${FILES_API}/upload`, formData, DEFAULT_OPTIONS_WITH_AUTH);

const getFile = (fileId) =>
  _get(`${FILES_API}/${fileId}`, OPTIONS_WITH_AUTH);

const deleteFile = (fileId) =>
  _delete(`${FILES_API}/${fileId}`, OPTIONS_WITH_AUTH);