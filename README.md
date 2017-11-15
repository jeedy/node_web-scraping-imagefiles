# node_web-scraping-imagefiles

Chapter 2. 웹데이터 수집 - 웹 크롤링 테크닉
============
1. dl-image.js / 02 HTML 해석(링크와 이미지추출)
1. getall.js / 03 사이트 통째로 다운로드
1. test-xml-builder2.js / 04 XML 해석
1. weather.js, weather-cheerio.js / 04 RSS 해석
1. kawase-usd_krw.js / 05 정기적으로 다운로드

## 오류 정정
1. 

## 사용된 라이브러리
> - cheerio-httpcli : [https://github.com/ktty1220/cheerio-httpcli]
> - request : [https://github.com/request/request]
> - fs : [https://nodejs.org/api/fs.html#fs_whatwg_url_object_support]
> - url : [https://nodejs.org/api/url.html]
> - xml2js : [https://www.npmjs.com/package/xml2js]

## crontab
```
분 시 일 월 요일 실행명령
0 7 * * * /path/to/func.sh

분 0-59
시 0-23
일 1-31
월 1-12
요일 0-7(0 혹은 7이 일요일)

리스트 : 0,10,30  : 0,10,30 각 값을 지정
범위  : 1-5 : 1,2,3,4,5 범위를 지정
간격  : */10 : 10,20,30 10 간격 지정
와일드카드 : * : 와일드 카드 지정

월말 처리방법
50 23 28-31 * * /usr/bin/test $(date -d '+1 day' +%d) -eq 1 && 실행명령어

표준 출력이나 오류 출력이 있을때 메일 통지
MAILTO="youeremail@email.com"
```