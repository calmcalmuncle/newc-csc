/*
var query = [
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#most-popular > div.panel.open > ol > li.first-child.ol1 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#most-popular > div.panel.open > ol > li.ol2 > a",
    "extract": "href"
  },
    {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#most-popular > div.panel.open > ol > li.ol3 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#most-popular > div.panel.open > ol > li.ol4 > a",
    "extract": "href"
  },
  
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

			 var NewsPopTwo;
			 var NewsPopThree;
			 var NewsPopFour;
			 
// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data1) {
			var NewsPopOne = '"'+data1[0].results+'"';
			NewsPopTwo = data1[1].results;
			NewsPopThree = data1[2].results;
			NewsPopFour = data1[3].results;
});
*/

var query = [
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#top-story > h2 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#top-story > h2",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#top-story > h2 > a > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#most-popular > div.panel.open > ol > li.ol2 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#second-story > div > h2 > a",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#second-story > div > h2 > a > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#third-story > div > h2 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#third-story > div > h2 > a",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#third-story > div > h2 > a > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#explainers > ul > li.small-image.column-1.first-child > h3 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#explainers > ul > li.small-image.column-1.first-child > h3 > a",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#explainers > ul > li.small-image.column-1.first-child > h3 > a > img",
    "extract": "src"
  }

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C1Fetch').href = 'http://www.bbc.co.uk'+data[0].results;
  document.getElementById('T2C1Fetch').href = 'http://www.bbc.co.uk'+data[3].results;
  document.getElementById('T2C2Fetch').href = 'http://www.bbc.co.uk'+data[6].results;
  document.getElementById('T2C3Fetch').href = 'http://www.bbc.co.uk'+data[9].results;
  document.getElementById('T1H1Fetch').innerHTML = data[1].results;
  document.getElementById('T2H1Fetch').innerHTML = data[4].results;
  document.getElementById('T2H2Fetch').innerHTML = data[7].results;
  document.getElementById('T2H3Fetch').innerHTML = data[10].results;
  document.getElementById('T1C1Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C1Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C2Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C3Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});

var NewsLink2 = "http://www.aljazeera.com/topics/regions/europe.html";

var query = [
/* Tier One Circle One */
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > a',
    extract: 'href'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > div > h1 > a',
    extract: 'text'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > a > img',
    extract: 'src'
  },
  /* Tier Two Circle One */
  {
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > div > h1 > a',
    extract: 'href'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > div > h1 > a',
    extract: 'text'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > a > img',
    extract: 'src'
  },
  /* Tier Two Circle Two */
  {
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > div > h1 > a',
    extract: 'href'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > div > h1 > a',
    extract: 'text'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > a > img',
    extract: 'src'
  },
  /* Tier Two Circle Three */
  {
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > div > h1 > a',
    extract: 'href'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > div > h1 > a',
    extract: 'text'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > a > img',
    extract: 'src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C2Fetch').href = 'http://www.aljazeera.com'+data[0].results;
  document.getElementById('T2C4Fetch').href = 'http://www.aljazeera.com'+data[3].results;
  document.getElementById('T2C5Fetch').href = 'http://www.aljazeera.com'+data[6].results;
  document.getElementById('T2C6Fetch').href = 'http://www.aljazeera.com'+data[9].results;
  document.getElementById('T1H2Fetch').innerHTML = data[1].results;
  document.getElementById('T2H4Fetch').innerHTML = data[4].results;
  document.getElementById('T2H5Fetch').innerHTML = data[7].results;
  document.getElementById('T2H6Fetch').innerHTML = data[10].results;
  document.getElementById('T1C2Fetch').style.backgroundImage = 'url(http://www.aljazeera.com'+data[2].results+')';
  document.getElementById('T2C4Fetch').style.backgroundImage = 'url(http://www.aljazeera.com'+data[5].results+')';
  document.getElementById('T2C5Fetch').style.backgroundImage = 'url(http://www.aljazeera.com'+data[8].results+')';
  document.getElementById('T2C6Fetch').style.backgroundImage = 'url(http://www.aljazeera.com'+data[11].results+')';
});

var NewsLink3 = "http://news.sky.com/uk";

var query = [
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a',
    extract: 'href'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > span',
    extract: 'text'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > div > div > img',
    extract: 'src'
  },
  {
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a',
    extract: 'href'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span',
    extract: 'text'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
  },
  {
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a',
    extract: 'href'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > span',
    extract: 'text'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > div > div > img',
    extract: 'src'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a',
    extract: 'href'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > span',
    extract: 'text'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://secret-reaches-3678.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = 'http://news.sky.com'+data[0].results;
  document.getElementById('T1H3Fetch').innerHTML = data[1].results;
  document.getElementById('T1C3Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C7Fetch').href = 'http://news.sky.com'+data[3].results;
  document.getElementById('T2H7Fetch').innerHTML = data[4].results;
  document.getElementById('T2C7Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C8Fetch').href = 'http://news.sky.com'+data[6].results;
  document.getElementById('T2H8Fetch').innerHTML = data[7].results;
  document.getElementById('T2C8Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C9Fetch').href = 'http://news.sky.com'+data[9].results;
  document.getElementById('T2H9Fetch').innerHTML = data[10].results;
  document.getElementById('T2C9Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});

var NewsLink4 = "http://www.independent.co.uk/";

var query = [
{
    url: NewsLink4,
    type: 'html',
    selector: '#main > div.widget.stories.topstory.widget-editable.viziwyg-section-1029.inpage-widget-6138678.default > div > div > div.media.news.text-top > h1 > a',
    extract: 'href',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#main > div.widget.stories.topstory.widget-editable.viziwyg-section-1029.inpage-widget-6138678.default > div > div > div.media.news.text-top > h1',
    extract: 'text',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#widget6138678-story10120487-picture10120662',
    extract: 'src',
  },
  {
    url: NewsLink4,
    type: 'html',
    selector: '#altLayout > div.column-1 > div.widget.stories.topstory.widget-editable.viziwyg-section-507.inpage-widget-8552102.default > div > div > div.media.news.text-top > h1 > a',
    extract: 'href',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#altLayout > div.column-1 > div.widget.stories.topstory.widget-editable.viziwyg-section-507.inpage-widget-8552102.default > div > div > div.media.news.text-top > h1 > a',
    extract: 'text',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#widget8552102-story10113939-picture9236151 > img',
    extract: 'src',
	cache: false
  },
  {
    url: NewsLink4,
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li.top-articles__item.top-articles__item--hero.column.column--inline > article > div.top-articles__item-details > h3 > a',
    extract: 'href',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li.top-articles__item.top-articles__item--hero.column.column--inline > article > div.top-articles__item-details > h3 > a',
    extract: 'text',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li.top-articles__item.top-articles__item--hero.column.column--inline > article > div.top-articles__item-image.brightcove-video > a > div > div > span > span:nth-child(1)',
    extract: 'data-src',
	cache: false
  },
  {
    url: NewsLink4,
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li:nth-child(4) > article > div.top-articles__item-details.top-articles__item-details--linked > h3 > a',
    extract: 'href',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li:nth-child(4) > article > div.top-articles__item-details.top-articles__item-details--linked > h3 > a',
    extract: 'text',
	cache: false
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li:nth-child(4) > article > div.top-articles__item-image.brightcove-video > a > div > div > span > span:nth-child(2)',
    extract: 'data-src',
	cache: false
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://secret-reaches-3678.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C4Fetch').href = data[0].results;
  document.getElementById('T1H4Fetch').innerHTML = data[1].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C10Fetch').href = data[3].results;
  document.getElementById('T2H10Fetch').innerHTML = data[4].results;
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C11Fetch').href = 'http://www.itv.com'+data[6].results;
  document.getElementById('T2H11Fetch').innerHTML = data[7].results;
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C12Fetch').href = 'http://www.itv.com'+data[9].results;
  document.getElementById('T2H12Fetch').innerHTML = data[10].results;
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});

