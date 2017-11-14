'use strict';
const
    xml2js = require('xml2js'),
    parseString = xml2js.parseString,
    Builder = xml2js.Builder;

const xml = '<fruits shop="AAA">' +
            '<item price="140">Banana</item>'+
            '<item price="200">Apple</item>'+
            '</fruits>';

parseString(xml, function(err, r){
    // 변환된 JSON 객체 출력
    console.log(JSON.stringify(r));

    // 변환된 JSON 객체를 다시 XML 로 편환
    var xml = new Builder().buildObject(r);
    console.log(xml);
    
});