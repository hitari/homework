import { makeUrlForGetMethod } from '@/js/helper/urlHelper';

const BASEURL = 'https://www.anapioficeandfire.com';

const fetchApi = async ({ path, params }) => {
  const url = makeUrlForGetMethod(`${BASEURL + path}`, params);
  const response = await fetch(url);
  const json = await response.json();
  return { data: json };
};

export { fetchApi };
