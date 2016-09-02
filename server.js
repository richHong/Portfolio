var express       = require('express'),
    path          = require('path'),
    httpProxy     = require('http-proxy'),
    bodyParser    = require('body-parser'),
    publicPath    = path.resolve(__dirname, 'public'),
    isProduction  = process.env.NODE_ENV === 'production',
    fetch         = require('isomorphic-fetch');

if (!isProduction) {
  var config = require('./config.js');
}
var port = process.env.PORT || 3000;

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();

//serving our index.html
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//server/compiler.js runs webpack-dev-server which creates the bundle.js which index.html serves
//the compiler adds some console logs for some extra sugar
//notice that you will not see a physical bundle.js because webpack-dev-server runs it from memory
var bundle = require('./server/compiler.js');
bundle();

//express now processes all requests to localhost:8080
//app.all is a special routing method used for loading middleware functions
app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
      target: 'http://localhost:8080'
  });
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.route('/api/email')
  .post(function(req, res){
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
          "authorization": process.env.sendgridAuth || config.sendgridAuth,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    }).then((response, req) => {
      res.status(response.status).send(response);
    });
  });


app.listen(port, function () {
  console.log('Server running on port ' + port);
});