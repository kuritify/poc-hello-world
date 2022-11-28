const { v4 } = require('uuid');
const _ = require('lodash');

function info(msg) {
  console.debug(v4());
  console.log(msg);
}

function warn(msg) {
  console.log(_.concat([msg, 'hogehoge'], '-'));
}


module.exports = {
  info,
  warn
};
