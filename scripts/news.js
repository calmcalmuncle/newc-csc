var query = [
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#top-story > h2 > a",
    "extract": "href"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#top-story > h2 > a",
    "extract": "text"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#top-story > h2 > a > img",
    "extract": "src"
  },
  {
    "url": "http://www.bbc.co.uk/news/",
    "selector": "#second-story > div > h2 > a",
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
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('Sec1').href = 'http://www.bbc.co.uk'+data[0].results;
  document.getElementById('Ter1').href = 'http://www.bbc.co.uk'+data[3].results;
  document.getElementById('Ter2').href = 'http://www.bbc.co.uk'+data[6].results;
  document.getElementById('Ter3').href = 'http://www.bbc.co.uk'+data[9].results;
  document.getElementById('Sec1').title = data[1].results;
  document.getElementById('Ter1').title = data[4].results;
  document.getElementById('Ter2').title = data[7].results;
  document.getElementById('Ter3').title = data[10].results;
  document.getElementById('Sec1').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('Ter1').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('Ter2').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('Ter3').style.backgroundImage = 'url("'+data[11].results+'")';
});

var query = [
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(1) > a',
    extract: 'href'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(1) > a > span > strong',
    extract: 'text'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(1) > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(2) > a',
    extract: 'href'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(2) > a > span > strong',
    extract: 'text'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(2) > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(3) > a',
    extract: 'href'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(3) > a > span > strong',
    extract: 'text'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(3) > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(4) > a',
    extract: 'href'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(4) > a > span > strong',
    extract: 'text'
  },
{
    url: 'http://www.dailymail.co.uk/home/index.html',
    type: 'html',
    selector: '#p-1028 > ul > li:nth-child(4) > a > img',
    extract: 'src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('Sec2').href = 'http://www.dailymail.co.uk'+data[0].results;
  document.getElementById('Ter4').href = 'http://www.dailymail.co.uk'+data[3].results;
  document.getElementById('Ter5').href = 'http://www.dailymail.co.uk'+data[6].results;
  document.getElementById('Ter6').href = 'http://www.dailymail.co.uk/'+data[9].results;
  document.getElementById('Sec2').title = data[1].results;
  document.getElementById('Ter4').title = data[4].results;
  document.getElementById('Ter5').title = data[7].results;
  document.getElementById('Ter6').title = data[10].results;
  document.getElementById('Sec2').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('Ter4').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('Ter5').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('Ter6').style.backgroundImage = 'url("'+data[11].results+'")';
});

var query = [
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--5.section-top-stories__item--odd > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--5.section-top-stories__item--odd > a > span',
    extract: 'text'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--5.section-top-stories__item--odd > a > div > div > img',
    extract: 'src'
  },
  {
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span',
    extract: 'text'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
  },
  {
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > span',
    extract: 'text'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > div > div > img',
    extract: 'src'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > span',
    extract: 'text'
  },
{
    url: 'http://news.sky.com/',
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('Sec3').href = 'http://news.sky.com'+data[0].results;
  document.getElementById('Sec3').title = data[1].results;
  document.getElementById('Sec3').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('Ter7').href = 'http://news.sky.com'+data[3].results;
  document.getElementById('Ter7').title = data[4].results;
  document.getElementById('Ter7').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('Ter8').href = 'http://news.sky.com'+data[6].results;
  document.getElementById('Ter8').title = data[7].results;
  document.getElementById('Ter8').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('Ter9').href = 'http://news.sky.com'+data[9].results;
  document.getElementById('Ter9').title = data[10].results;
  document.getElementById('Ter9').style.backgroundImage = 'url("'+data[11].results+'")';
});

var query = [
{
    url: 'http://www.mirror.co.uk/news/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.mirror.co.uk/news/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.mirror.co.uk/news/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > figure > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.independent.co.uk/',
    type: 'html',
    selector: '#altLayout > div.column-1 > div.widget.stories.topstory.widget-editable.viziwyg-section-507.inpage-widget-8552102.default > div > div > div.media.news.text-top > h1 > a',
    extract: 'href'
  },
{
     url: 'http://www.independent.co.uk/',
    type: 'html',
    selector: '#altLayout > div.column-1 > div.widget.stories.topstory.widget-editable.viziwyg-section-507.inpage-widget-8552102.default > div > div > div.media.news.text-top > h1 > a',
    extract: 'text'
  },
{
    url: 'http://www.independent.co.uk/',
    type: 'html',
    selector: '#widget8552102-story10096252-picture9995789 > img',
    extract: 'src'
  },
  {
    url: 'http://www.itv.com/news/',
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li.top-articles__item.top-articles__item--hero.column.column--inline > article > div.top-articles__item-details > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.itv.com/news/',
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li.top-articles__item.top-articles__item--hero.column.column--inline > article > div.top-articles__item-details > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.itv.com/news/',
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li.top-articles__item.top-articles__item--hero.column.column--inline > article > div.top-articles__item-image.brightcove-video > a > div > div > span > span:nth-child(1)',
    extract: 'data-src'
  },
  {
    url: 'http://www.itv.com/news/',
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li:nth-child(4) > article > div.top-articles__item-details.top-articles__item-details--linked > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.itv.com/news/',
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li:nth-child(4) > article > div.top-articles__item-details.top-articles__item-details--linked > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.itv.com/news/',
    type: 'html',
    selector: '#stories > div.wrap > section > div > ul > li:nth-child(4) > article > div.top-articles__item-image.brightcove-video > a > div > div > span > span:nth-child(2)',
    extract: 'data-src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('Sec4').href = data[0].results;
  document.getElementById('Sec4').title = data[1].results;
  document.getElementById('Sec4').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('Ter10').href = data[3].results;
  document.getElementById('Ter10').title = data[4].results;
  document.getElementById('Ter10').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('Ter11').href = 'http://www.itv.com'+data[6].results;
  document.getElementById('Ter11').title = data[7].results;
  document.getElementById('Ter11').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('Ter12').href = 'http://www.itv.com'+data[9].results;
  document.getElementById('Ter12').title = data[10].results;
  document.getElementById('Ter12').style.backgroundImage = 'url("'+data[11].results+'")';
});

