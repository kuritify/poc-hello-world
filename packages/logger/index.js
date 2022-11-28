const { v4 } = require('uuid');
const _ = require('lodash');
const moment = require('moment');

function info(msg) {
  console.debug(v4());
  console.log(msg);
}

function warn(msg) {
  console.log(_.concat([msg, 'hogehoge'], '-'));
}

function error(meg) {
  console.log(msg, moment());
}

module.exports = {
  info,
  warn,
  error
};
