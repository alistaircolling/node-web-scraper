//         Checks if an img element with specific class contains a specific jpg ///////////////

var request = require("request");
var cheerio = require("cheerio");
const url = "https://www.alpkit.com/products/returned-lotic-wetsuit-mens";
const elementType = 'img';
const className = 'sold-out';
const attribute = 'class';
const jpgName = '/images/made/images/studio/lotic_seconds_men_80_60auto_c1_c_c.jpg';

console.log('hello node scraper');

request({
    uri: url
},

function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('success!');
            var $ = cheerio.load(body);
            var hasSoldOut = $($(elementType).attr(attribute, className)[15]).attr('src');
            console.log(jpgName);
            console.log('========== is contained in below? ==========');
            console.log(hasSoldOut);    
            console.log("index:"+hasSoldOut.indexOf(jpgName));
            if (hasSoldOut.indexOf(jpgName) !== -1) {
                console.log('has sold out 😕');
            }else{
                console.log('may be in stock 🙏');
            }
        }else{
            console.log('error 😖');
        }
    }
);
