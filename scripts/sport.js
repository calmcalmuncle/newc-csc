var query = [
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#story-2 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#story-2 > a > span.headline-wrapper",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#story-2 > a > span.image-wrapper.image-small > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#story-3 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#story-3 > a > span.headline-wrapper",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#story-3 > a > span.image-wrapper.image-small > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#live-first-story > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#live-first-story > a > h2",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#live-first-story > a > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#live-story-2 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#live-story-2 > a > span.headline-wrapper",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/sport/",
    "selector": "#live-story-2 > a > span.image-wrapper.image-medium > img",
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

var query = [
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(1) > a',
    extract: 'href'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(1) > a',
    extract: 'text'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(1) > a > div > img',
    extract: 'src'
  },
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(2) > a',
    extract: 'href'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(2) > a',
    extract: 'text'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(2) > a > div > img',
    extract: 'src'
  },
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(3) > a',
    extract: 'href'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(3) > a',
    extract: 'text'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(3) > a > div > img',
    extract: 'src'
  },
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(4) > a',
    extract: 'href'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(4) > a',
    extract: 'text'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(4) > a > div > img',
    extract: 'src'
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C2Fetch').href = 'http://www.sport.co.uk'+data[0].results;
  document.getElementById('T2C4Fetch').href = 'http://www.sport.co.uk'+data[3].results;
  document.getElementById('T2C5Fetch').href = 'http://www.sport.co.uk'+data[6].results;
  document.getElementById('T2C6Fetch').href = 'http://www.sport.co.uk'+data[9].results;
  document.getElementById('T1H2Fetch').innerHTML = data[1].results;
  document.getElementById('T2H4Fetch').innerHTML = data[4].results;
  document.getElementById('T2H5Fetch').innerHTML = data[7].results;
  document.getElementById('T2H6Fetch').innerHTML = data[10].results;
  document.getElementById('T1C2Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C4Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C5Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C6Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});

var query = [
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > h4 > a',
    extract: 'href'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > h4 > a',
    extract: 'text'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > h4 > a',
    extract: 'href'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > h4 > a',
    extract: 'text'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > h4 > a',
    extract: 'href'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > h4 > a',
    extract: 'text'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > h4 > a',
    extract: 'href'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > h4 > a',
    extract: 'text'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > a > img',
    extract: 'src'
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = data[0].results;
  document.getElementById('T2C7Fetch').href = data[3].results;
  document.getElementById('T2C8Fetch').href = data[6].results;
  document.getElementById('T2C9Fetch').href = data[9].results;
  document.getElementById('T1H3Fetch').innerHTML = data[1].results;
  document.getElementById('T2H7Fetch').innerHTML = data[4].results;
  document.getElementById('T2H8Fetch').innerHTML = data[7].results;
  document.getElementById('T2H9Fetch').innerHTML = data[10].results;
  document.getElementById('T1C3Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C7Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C8Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C9Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});

var query = [
{
    url: 'http://www.mirror.co.uk/sport/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.mirror.co.uk/sport/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.mirror.co.uk/sport/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > figure > a > img',
    extract: 'src'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > a',
    extract: 'href'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > a',
    extract: 'text'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'href'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'text'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > a',
    extract: 'href'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > a',
    extract: 'text'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src'
  },
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
document.getElementById('T1C4Fetch').href = data[0].results;
document.getElementById('T2C10Fetch').href = data[3].results;
document.getElementById('T2C11Fetch').href = data[6].results;
document.getElementById('T2C12Fetch').href = data[9].results;

document.getElementById('T1H4Fetch').innerHTML = data[1].results;
document.getElementById('T2H10Fetch').innerHTML = data[4].results;
document.getElementById('T2H11Fetch').innerHTML = data[7].results;
document.getElementById('T2H12Fetch').innerHTML = data[10].results;

document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
document.getElementById('T2C10Fetch').style.backgroundImage = 'url("http:'+data[5].results+'")';
document.getElementById('T2C11Fetch').style.backgroundImage = 'url("http:'+data[8].results+'")';
document.getElementById('T2C12Fetch').style.backgroundImage = 'url("http:'+data[11].results+'")';
});




