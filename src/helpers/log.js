export const log = (msg) => {
  console.log(msg);
};

export const error = (e) => {
  if (typeof e !== 'error') {
    e = new Error(e);
  }
  console.error(e);
};

export const warn = (msg) => {
  console.warn(msg);
};
