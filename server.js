var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();
var http = require('http').createServer(app);

const PORT = process.env['PORT'] || 4000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.post('/upload', upload.single('file'), function (req, res, next) {
    //console.log(req);
    console.log('File saved to "' + req.file.path + '"');
    res.render('pages/gotit');
});

if (!PORT) {
  console.log('Error: Please specify PORT as an environment variable');
  process.exit(1);
} else {
  http.listen(PORT, () => {
    console.log('Listening on ' + PORT + '!')
  });
}
