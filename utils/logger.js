const logger = require('tracer').colorConsole({
  format : "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})",
  dateformat : "HH:MM:ss.L"
})
module.exports = logger