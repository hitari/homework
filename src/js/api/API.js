// const URL = 'https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10';
// http://localhost:3004/characters?&_page=1&_limit=10
import { makeUrlForGetMethod } from '@/js/helper/urlHelper';

const URL = 'https://www.anapioficeandfire.com/api/characters';
const localURL = 'http://localhost:3004/characters';

async function fetchApi(params) {
  const url = makeUrlForGetMethod(URL, params);
  const response = await fetch(url);
  const json = await response.json();
  return { data: json };
}

export async function getCharacters({ page = 1, limit = 10, params = [] }) {
  console.log('getCharacters');
  try {
    const { data } = await fetchApi(Object.assign({ page, pageSize: limit }, ...params));
    return data;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
}
