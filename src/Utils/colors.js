export const black = '#28333D';
export const darkGrey = '#546474';
export const grey = '#90A0AF';
export const lightGrey = '#CED8E1';
export const almostWhite = '#F8F8F8';
export const white = '#fff';
export const purple = '#6E41E0';
export const blue = '#1F91CC';
export const lightBlue = '#999FF0';
export const teal = '#51E2F5';
export const green = '#20D479';
export const lightGreen = '#24F38B';
export const orange = '#F5BF36';
export const yellow = '#E3ED11';
export const red = '#BF456B';
export const pink = '#E074CB';

const padZero = (str, len) => {
  len = len || 2;
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
};

const invertColor = (hex, bw) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  let r = parseInt(hex.slice(0, 2), 16);

  let g = parseInt(hex.slice(2, 4), 16);

  let b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#28333D' : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return `#${padZero(r)}${padZero(g)}${padZero(b)}`;
};

const strToHex = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
};

export default {
  black,
  darkGrey,
  grey,
  lightGrey,
  almostWhite,
  white,
  purple,
  blue,
  lightBlue,
  teal,
  green,
  lightGreen,
  orange,
  yellow,
  red,
  pink,
  invertColor,
  strToHex,
};
