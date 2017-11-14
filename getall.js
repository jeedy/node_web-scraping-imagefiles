"use strict";

const
    client = require('cheerio-httpcli'),
    request = require('request'),
    urlType = require('url'),
    fs = require('fs'),
    path = require('path');

const
    LINK_LEVEL = 4,
    TARGET_URL = 'https://nodejs.org/dist/latest-v8.x/docs/api/';

var list = {};

downloadRec(TARGET_URL, 0);

function downloadRec(url, level){
    if(level >= LINK_LEVEL) {
        return;
    }
    if(list[url]) {
        return;
    }
    list[url] = true;

    var us = TARGET_URL.split("/");
    us.pop();

    var base = us.join("/");
    if(url.indexOf(base)<0){
        return;
    }

    client.fetch(url, {}, function(err, $, res){

        $("a").each(function(idx){
            var href = $(this).attr("href");
            if(!href) return;

            href = urlType.resolve(url, href);

            href = href.replace(/\#.+$/, "");   // 말미의 # 삭제
            downloadRec(href, level+1);     // 재귀호출

        });

        if(url.substr(url.length-1, 1) == '/') {
            url += "index.html";
        }

        console.log("level",level," :: ", url);
        var savepath = url.split("/").slice(2).join("/");
        checkSaveDir(savepath);
        //console.log(savepath);
        fs.writeFileSync(savepath, $.html());
    });


}


function checkSaveDir(fname) {
    var dir = path.dirname(fname);

    var dirlist = dir.split("/");
    var p = "";
    for(var i in dirlist){
        p += dirlist[i] + "/";
        if(!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}

