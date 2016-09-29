
let utils = {
  padLeft: padLeft
};

function padLeft(num) {
  var str = "" + num;
  var pad = "000";
  return pad.substring(0, pad.length - str.length) + str;
}

export default utils;