import { fetchApi } from './baseAPI';

// 해당 API path
const PATH = '/api/characters';

export async function getCharacters({ page = 1, limit = 10, params = [] }) {
  try {
    const { data } = await fetchApi({
      path: PATH,
      params: Object.assign({ page: page, pageSize: limit }, ...params),
    });
    return data;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
}
