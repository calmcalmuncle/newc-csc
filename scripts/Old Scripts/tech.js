var query = [
  {
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#top-story > h2 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'text',
    cache: 'false'
  },
  {
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#second-story > div > h2 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'text',
    cache: 'false'
  },
  {
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#third-story > div > h2 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#features-and-analysis > ul > li.first-child.large-image > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#features-and-analysis > ul > li.first-child.large-image > h3 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#features-and-analysis > ul > li.first-child.large-image > h3 > a',
    extract: 'text',
    cache: 'false'
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
  document.getElementById('T1H1Fetch').innerHTML = data[2].results;
  document.getElementById('T2H1Fetch').innerHTML = data[5].results;
  document.getElementById('T2H2Fetch').innerHTML = data[8].results;
  document.getElementById('T2H3Fetch').innerHTML = data[11].results;
  document.getElementById('T1C1Fetch').style.backgroundImage = 'url("'+data[1].results+'")';
  document.getElementById('T2C1Fetch').style.backgroundImage = 'url("'+data[4].results+'")';
  document.getElementById('T2C2Fetch').style.backgroundImage = 'url("'+data[7].results+'")';
  document.getElementById('T2C3Fetch').style.backgroundImage = 'url("'+data[10].results+'")';
});



var query = [
  {
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a > article > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a > article > h1',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a > article > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a > article > h1',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a > article > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a > article > h1',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a > article > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a > article > h1',
    extract: 'text',
    cache: 'false'
  }

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C2Fetch').href = 'http://www.technologyreview.com'+data[0].results;
  document.getElementById('T2C4Fetch').href = 'http://www.technologyreview.com'+data[3].results;
  document.getElementById('T2C5Fetch').href = 'http://www.technologyreview.com'+data[6].results;
  document.getElementById('T2C6Fetch').href = 'http://www.technologyreview.com'+data[9].results;
  document.getElementById('T1H2Fetch').innerHTML = data[2].results;
  document.getElementById('T2H4Fetch').innerHTML = data[5].results;
  document.getElementById('T2H5Fetch').innerHTML = data[8].results;
  document.getElementById('T2H6Fetch').innerHTML = data[11].results;
  document.getElementById('T1C2Fetch').style.backgroundImage = 'url("'+data[1].results+'")';
  document.getElementById('T2C4Fetch').style.backgroundImage = 'url("'+data[4].results+'")';
  document.getElementById('T2C5Fetch').style.backgroundImage = 'url("'+data[7].results+'")';
  document.getElementById('T2C6Fetch').style.backgroundImage = 'url("'+data[10].results+'")';
});
  
var query = [
<<<<<<< HEAD
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--2.section-top-stories__item--even > a',
    extract: 'href'
=======
  {
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a',
    extract: 'href',
    cache: 'false'
>>>>>>> development
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
<<<<<<< HEAD
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--2.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
=======
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > div > div > img',
    extract: 'src',
    cache: 'false'
>>>>>>> development
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
<<<<<<< HEAD
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--2.section-top-stories__item--even > a > span',
    extract: 'text'
  },
  {
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a > div > div > img',
    extract: 'src'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a > span',
    extract: 'text'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a > span',
    extract: 'text'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a',
    extract: 'href'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img',
    extract: 'src'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span',
    extract: 'text'
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = 'http://news.sky.com'+data[0].results;
  document.getElementById('T2C7Fetch').href = 'http://news.sky.com'+data[3].results;
  document.getElementById('T2C8Fetch').href = 'http://news.sky.com'+data[6].results;
  document.getElementById('T2C9Fetch').href = 'http://news.sky.com'+data[9].results;
  document.getElementById('T1H3Fetch').innerHTML = data[2].results;
  document.getElementById('T2H7Fetch').innerHTML = data[5].results;
  document.getElementById('T2H8Fetch').innerHTML = data[8].results;
  document.getElementById('T2H9Fetch').innerHTML = data[11].results;
  document.getElementById('T1C3Fetch').style.backgroundImage = 'url("'+data[1].results+'")';
  document.getElementById('T2C7Fetch').style.backgroundImage = 'url("'+data[4].results+'")';
  document.getElementById('T2C8Fetch').style.backgroundImage = 'url("'+data[7].results+'")';
  document.getElementById('T2C9Fetch').style.backgroundImage = 'url("'+data[10].results+'")';
});

var query = [
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(1) > a:nth-child(1)',
    extract: 'href'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(1) > a:nth-child(1) > article > div.image > figure > img',
    extract: 'src'
=======
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > span',
    extract: 'text',
    cache: 'false'
  },
  {
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a > span',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a > span',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span',
    extract: 'text',
    cache: 'false'
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://secret-reaches-3678.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = 'http://news.sky.com'+data[0].results;
  document.getElementById('T2C7Fetch').href = 'http://news.sky.com'+data[3].results;
  document.getElementById('T2C8Fetch').href = 'http://news.sky.com'+data[6].results;
  document.getElementById('T2C9Fetch').href = 'http://news.sky.com'+data[9].results;
  document.getElementById('T1H3Fetch').innerHTML = data[2].results;
  document.getElementById('T2H7Fetch').innerHTML = data[5].results;
  document.getElementById('T2H8Fetch').innerHTML = data[8].results;
  document.getElementById('T2H9Fetch').innerHTML = data[11].results;
  document.getElementById('T1C3Fetch').style.backgroundImage = 'url("'+data[1].results+'")';
  document.getElementById('T2C7Fetch').style.backgroundImage = 'url("'+data[4].results+'")';
  document.getElementById('T2C8Fetch').style.backgroundImage = 'url("'+data[7].results+'")';
  document.getElementById('T2C9Fetch').style.backgroundImage = 'url("'+data[10].results+'")';
});


var query = [
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a > div > h2',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a > div > h2',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a > div > h2',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a > img',
    extract: 'src',
    cache: 'false'
>>>>>>> development
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(1) > a:nth-child(1) > article > div.content > header > h3',
    extract: 'text'
  },
  {
<<<<<<< HEAD
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(2) > a:nth-child(1)',
    extract: 'href'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(2) > a:nth-child(1) > article > div.image > figure > img',
    extract: 'srcset'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(2) > a:nth-child(1) > article > div.content > header > h3',
    extract: 'text'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(3) > a:nth-child(1)',
    extract: 'href'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(3) > a:nth-child(1) > article > div.image > figure > img',
    extract: 'srcset'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(3) > a:nth-child(1) > article > div.content > header > h3',
    extract: 'text'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(4) > a:nth-child(1)',
    extract: 'href'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(4) > a:nth-child(1) > article > div.image > figure > img',
    extract: 'srcset'
  },
{
    url: 'http://www.techradar.com/',
    type: 'html',
    selector: '#content > section:nth-child(2) > div.listingResults > div:nth-child(4) > a:nth-child(1) > article > div.content > header > h3',
    extract: 'text'
=======
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a > div > h2',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a > img',
    extract: 'src',
    cache: 'false'
>>>>>>> development
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
<<<<<<< HEAD
	var string = data[4].results;
var res = string.split(" ");
alert(res[0]);

  document.getElementById('T1C4Fetch').href = 'http://www.techradar.com'+data[0].results;
  document.getElementById('T2C10Fetch').href = 'http://www.techradar.com'+data[3].results;
  document.getElementById('T2C11Fetch').href = 'http://www.techradar.com'+data[6].results;
  document.getElementById('T2C12Fetch').href = 'http://www.techradar.com'+data[9].results;
  document.getElementById('T1H4Fetch').innerHTML = data[2].results;
  document.getElementById('T2H10Fetch').innerHTML = data[5].results;
  document.getElementById('T2H11Fetch').innerHTML = data[8].results;
  document.getElementById('T2H12Fetch').innerHTML = data[11].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[1].results+'")';
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("'+res[0]+'")';
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[7].results+'")';
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[10].results+'")';
=======
  document.getElementById('T1C4Fetch').href = data[0].results;
  document.getElementById('T2C10Fetch').href = data[3].results;
  document.getElementById('T2C11Fetch').href = data[6].results;
  document.getElementById('T2C12Fetch').href = data[9].results;
  document.getElementById('T1H4Fetch').innerHTML = data[1].results;
  document.getElementById('T2H10Fetch').innerHTML = data[4].results;
  document.getElementById('T2H11Fetch').innerHTML = data[7].results;
  document.getElementById('T2H12Fetch').innerHTML = data[10].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
>>>>>>> development
});
