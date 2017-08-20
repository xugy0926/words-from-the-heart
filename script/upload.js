var request = require('superagent');
var jsonfile = require('jsonfile');

const wordsFilePath = './output/words.json';

let json = jsonfile.readFileSync(wordsFilePath);

let host = process.env.host;

request
  .post(`${host}/api/words/update`)
  .send({words: json}) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('Accept', 'application/json')
  .end(function(err, res){
    if (err) {
      console.log(err);
    } else {
      console.log('success!!');
    }
  });