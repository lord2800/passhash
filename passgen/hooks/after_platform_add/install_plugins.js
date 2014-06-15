#!/usr/bin/env node

var pluginlist = [
    "com.verso.cordova.clipboard"
];

var exec = require('child_process').exec;

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, function (e, stdout) { require('sys').puts(stdout); });
});
