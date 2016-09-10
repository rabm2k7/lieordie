var express 	  = require('express'),
	app 			    = express(),
	request 		  = require('request'),
	EventEmitter 			  = require('events');
var bodyParser  = require('body-parser');
var eventEmitter = new EventEmitter();


app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});


// input

app.post('/command', function (req, res) {
	var command = req.body.cmd,
      param  = req.body.param;

      console.log(req.body);
      console.log("Reading Command");

      if(command){
      res.status(200);
      eventEmitter.emit("fire",command,param)
    }0

});


//	process

//	output

