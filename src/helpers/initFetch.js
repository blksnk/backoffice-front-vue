import { DB } from './fetch';
import { log } from './log';

const arrayToObject = (names, content) => {
  return Object.fromEntries(names.map((name, index) => [name, content[index]]));
};

export default async function initFetch() {
  try {
    const modelNames = await DB.methods.getModelNames();

    // fetch all models content

    let [data, shemas] = await Promise.all([
      Promise.all(modelNames.map((name) => DB.model.getList(name))),
      Promise.all(modelNames.map((name) => DB.model.getShema(name))),
    ]);

    data = arrayToObject(modelNames, data);
    shemas = arrayToObject(modelNames, shemas);
    log(shemas);

    return {
      modelNames,
      data,
      shemas,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}
