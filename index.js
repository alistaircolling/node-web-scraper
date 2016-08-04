var request = require("request");
var cheerio = require("cheerio");

console.log('hello node scraper');

request({
    uri: "https://www.alpkit.com/products/returned-lotic-wetsuit-mens",
},

function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('success!');
            var $ = cheerio.load(body);
            var hasSoldOut = $('img').attr('class', 'sold-out');
            console.log(hasSoldOut);
        }else{
            console.log('error');
        }
    }
);

//var cheerio = require("cheerio");
//var html = "<ul><li>foo</li><li>bar</li></ul>";
//var $ = cheerio.load(html);
//var list = $("ul");

//console.log(list.html());
