'use strict';

const client = require('cheerio-httpcli');

const RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";

client.fetch(RSS, {}, function(err, $, res){
    if(err){console.log(err); return;}

    var city = $("location:nth-child(1) > city").text();
    $("location:nth-child(1) > data").each(function(idx){

        var tmEf = $(this).find('tmEf').text();
        var wf = $(this).find('wf').text();
        var tmn = $(this).find('tmn').text();
        var tmx = $(this).find('tmx').text();

        console.log(city+" "+tmEf+" "+wf+" "+tmn+" ~ "+tmx);
    });
});