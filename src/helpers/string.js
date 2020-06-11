export const lowercase = (s) => {
  if (typeof s === 'string') {
    return s.toLowerCase();
  } else {
    return String(s).toLowerCase();
  }
};

export const uppercase = (s) => {
  if (typeof s === 'string') {
    return s.toUpperCase();
  } else {
    return String(s).toUpperCase();
  }
};

export const capitalize = (s) => {
  if (typeof s === 'string') {
    return uppercase(s.charAt(0)) + s.slice(1, -1);
  }
};

export const splitByWord = (s) => {
  if (typeof s === 'string') {
    return s.split(' ');
  }
};

export const assemble = (s, separator) => s.join(separator || '');
