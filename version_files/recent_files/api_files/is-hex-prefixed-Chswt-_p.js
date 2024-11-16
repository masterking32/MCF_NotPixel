var r = function(e) {
  if (typeof e != "string") throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed.");
  return e.slice(0, 2) === "0x"
};
export {
  r as s
};