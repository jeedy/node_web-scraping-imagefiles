"use strict";

const client = require('cheerio-httpcli'),
    request = require('request'),
    fs = require('fs'),
    urlType = require('url');

let savedir = __dirname +'/img';
if(!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

let url = "https://ko.wikipedia.org/wiki/"+encodeURIComponent("강아지");
console.log("url:: ", url);
let param = {};

client.fetch(url, param, function(err, $, res){
    if(err){
        console.log("error :: ");
        console.log(err);
        return;
    }
    $("img").each(function(idx){
        let src = $(this).attr('src');

        src = urlType.resolve(url, src);

        let fname = urlType.parse(src).pathname;
        fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');

        request(src).pipe(fs.createWriteStream(fname));
    });

});