import { get, post } from 'axios';
import { assemble } from './string';

const { VUE_APP_DB_URL } = process.env;

export const assembleDbUrl = (url) => assemble([VUE_APP_DB_URL, url]);

async function fetchData(func, url, options) {
  try {
    const res = await func(url, options);
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const DB = {
  methods: {
    get: (url, options) => fetchData(get, assembleDbUrl(url), options),
    post: (url, options) => fetchData(post, assembleDbUrl(url), options),
    getModelNames: () => fetchData(get, assembleDbUrl('/model/get')),
  },
  model: {
    getList: (modelName, options) =>
      fetchData(get, assembleDbUrl(`/data/${modelName}/get`), options),
    postNew: (modelName, body) =>
      fetchData(post, assembleDbUrl(`/data/${modelName}/add`), body),
    getShema: (modelName) =>
      fetchData(get, assembleDbUrl(`/model/get/${modelName}`)),
  },
};
