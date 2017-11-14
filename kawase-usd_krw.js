
const API = 'http://api.aoikujira.com/kawase/json/usd';
const basePath = 'usd_krw';
const 
    request = require('request'),
    fs = require('fs');

request(API, function(err, res, body){
    if(err || res.statusCode!=200){
        console.log(err);
        return;
    }

    var r = JSON.parse(body);
    var krw = r["KRW"];

    var t = new Date();
    var fname = "USD_KRW_"+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDay()+".txt";
    var text = "1usd="+krw+"krw";
    console.log(text);
    if(!fs.existsSync(basePath)){
        fs.mkdirSync(basePath);
    }
    fs.writeFileSync(basePath+"/"+fname, text);
});