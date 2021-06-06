// const URL = 'https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10';
// http://localhost:3004/characters?&_page=1&_limit=10
import { makeUrlForGetMethod } from '@/js/helper/urlHelper';

async function fetchApi(params) {
  const url = makeUrlForGetMethod('http://localhost:3004/characters', params);
  const response = await fetch(url);
  const json = await response.json();
  return { data: json };
}

export async function getCharacters({ page = 1, limit = 10, params = [] }) {
  try {
    const { data } = await fetchApi(Object.assign({ _page: page, _limit: limit }, ...params));
    return data;
  } catch (err) {
    throw err;
  }
}
