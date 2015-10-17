#!/usr/bin/env node
var program = require('commander'),
    folder  = require('../');

program
  .version('0.5.1')
  .usage('node-folder {dir1/{sub1,sub2,sub3/child{1..5}},dir2}')
  .parse(process.argv);

if(!program.args.length) program.help();
else folder(program.args);
