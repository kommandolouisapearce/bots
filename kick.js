
function httpsget(host, path, type) {
	var https = require('https');
	var options = {
	  hostname: host,
	  port: 443,
	  path: path,
	  method: 'GET'
	};
	var buffer = '';
	var req = https.request(options, function (res) {
		res.setEncoding('utf8');
	  res.on('data', function (d)  {
		buffer = buffer + d;
	  });
	  res.on('end', function (d)  {
		var myjs = JSON.parse(buffer);
		var groups = myjs[type];
		for(var i = 0; i < groups.length; i++) {
			console.log(groups[i]['id'] + ' ' + groups[i]['name'])
		}
	  });
	});
	req.end();
}


function sendRequest(host, path, onDataFunction, onEndFunction) {
	var https = require('https');
	var options = {
	  hostname: host,
	  port: 443,
	  path: path,
	  method: 'GET'
	};
	var buffer = '';
	var req = https.request(options, function (res) {
		res.setEncoding('utf8');
	  res.on('data', onDataFunction);
	  res.on('end', onEndFunction);
	});
	req.end();
}

function test(host, path, type) {
	sendRequest(host, path, function (d)  {
			buffer = buffer + d;
		  }, 
		function (d)  {
			var myjs = JSON.parse(buffer);
			var groups = myjs[type];
			for(var i = 0; i < groups.length; i++) {
				console.log(groups[i]['id'] + ' ' + groups[i]['name'])
			}});
}

/*function manageUser(path) {
	var https = require('https');
	var options = {
	  hostname:  'slack.com',
	  port: 443,
	  path: path,
	  method: 'GET'
	};
	var buffer = '';
	var req = https.request(options, function (res) {
		res.setEncoding('utf8');
	  res.on('data', function (d)  {
		buffer = buffer + d;
	  });
	  res.on('end', function (d)  {
	  });
	});
	req.end();
}*/


function manageUser(path) {
	var https = require('https');
	var options = {hostname:  'slack.com', port: 443, path: path, method: 'GET'};
	var req = https.request(options, function (res) {});
	req.end();
}

/*
module.exports = function (token, url) {
	return function (req, res, next) {
		if(req.body.token == token) {
		        console.log("it is okay");
		        var mongodb = require('mongodb');
		        var MongoClient = mongodb.MongoClient;
		        var userName = req.body.user_name;
		        var text = req.body.text;
		        var db = req.db;
		        var message = "";
		        var textlist = text.split(' ');
		        switch(textlist[0]) {
		                case "kick":
					var kickTarget = textlist[1];
					// get userid from username
					// is this a channel or a group???
		                        break;
		                case "two":
		                        break;
		                default:
		                        message = "error";
		        }
		}
		else {
		        console.log("no no no");
		}
	}
}*/


var token = '';
var channel = '';
var group = '';
var user = '';


var hostname ='slack.com';
var group_method = '/api/groups.list?';
var group_path = group_method  +  'token=' + token;

var channel_method = '/api/channels.list?';
var channel_path = channel_method + 'token=' + token;


//httpsget(hostname, group_path , 'groups');
//httpsget(hostname, channel_path, 'channels');
//httpsget(hostname,('/api/users.list?token=' + token,'members');


//manageUser('/api/channels.kick?token=' + token + '&channel=' + channel + '&user=' + user);
//manageUser('/api/channels.invite?token=' + token + '&channel=' + channel + '&user=' + 'user);
//manageUser('/api/groups.kick?token=' + token + '&channel=' + group + '&user=' + user);
//manageUser('/api/groups.invite?token=' + token + '&channel=' + group + '&user=' + user);

