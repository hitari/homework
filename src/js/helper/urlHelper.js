// get method query prams 붙은 url 생성
export const makeUrlForGetMethod = (url = '', params = []) => {
  const urlInfo = new URL(url);
  urlInfo.search = new URLSearchParams(params).toString();
  return urlInfo;
};

// query param value를 추출한다.
export const getUrlParam = (name) => new URLSearchParams(location.search).get(name);
