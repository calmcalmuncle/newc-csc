var query = [
  {
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#top-story > h2 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'text'
  },
  {
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#second-story > div > h2 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'text'
  },
  {
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#third-story > div > h2 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#features-and-analysis > ul > li.first-child.large-image > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#features-and-analysis > ul > li.first-child.large-image > h3 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/technology/',
    type: 'html',
    selector: '#features-and-analysis > ul > li.first-child.large-image > h3 > a',
    extract: 'text'
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
    extract: 'href'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a > article > img',
    extract: 'src'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a > article > h1',
    extract: 'text'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a',
    extract: 'href'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a > article > img',
    extract: 'src'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a > article > h1',
    extract: 'text'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a',
    extract: 'href'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a > article > img',
    extract: 'src'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a > article > h1',
    extract: 'text'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a',
    extract: 'href'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a > article > img',
    extract: 'src'
  },
{
    url: 'http://www.technologyreview.com/',
    type: 'html',
    selector: '#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a > article > h1',
    extract: 'text'
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
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a',
    extract: 'href'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a > div > h2',
    extract: 'text'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a > img',
    extract: 'src'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a',
    extract: 'href'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a > div > h2',
    extract: 'text'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a > img',
    extract: 'src'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a',
    extract: 'href'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a > div > h2',
    extract: 'text'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a > img',
    extract: 'src'
  },
  {
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a',
    extract: 'href'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a > div > h2',
    extract: 'text'
  },
{
    url: 'http://techcrunch.com/',
    type: 'html',
    selector: 'body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a > img',
    extract: 'src'
  }
]
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
    url: 'http://www.theguardian.com/uk/technology',
    type: 'html',
    selector: '#technology > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-2.u-faux-block-link > div > div > a',
    extract: 'href'
  },
{
    url: 'http://www.theguardian.com/uk/technology',
    type: 'html',
    selector: '#technology > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-2.u-faux-block-link > div > div > a',
    extract: 'text'
  },
{
    url: 'http://www.theguardian.com/uk/technology',
    type: 'html',
    selector: '#technology > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-2.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src'
  },
{
    url: 'http://www.theguardian.com/uk/technology',
    type: 'html',
    selector: '#technology > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li:nth-child(2) > div > div > a',
    extract: 'href'
  },
{
    url: 'http://www.theguardian.com/uk/technology',
    type: 'html',
    selector: '#technology > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li:nth-child(2) > div > div > a',
    extract: 'text'
  },
{
    url: 'http://www.theguardian.com/uk/technology',
    type: 'html',
    selector: '#technology > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li:nth-child(2) > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.com/future/sections/technology',
    type: 'html',
    selector: '#blq-content > section.main-column > article.story-index-item.full-width-text-inset > div.text-box > div > h1 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.com/future/sections/technology',
    type: 'html',
    selector: '#blq-content > section.main-column > article.story-index-item.full-width-text-inset > div.text-box > div > h1 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.com/future/sections/technology',
    type: 'html',
    selector: '#blq-content > section.main-column > article.story-index-item.full-width-text-inset > div.image-container > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.com/future/sections/technology',
    type: 'html',
    selector: '#blq-content > section.secondary-column > article:nth-child(2) > div.text-box > div > h1 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.com/future/sections/technology',
    type: 'html',
    selector: '#blq-content > section.secondary-column > article:nth-child(2) > div.text-box > div > h1 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.com/future/sections/technology',
    type: 'html',
    selector: '#blq-content > section.secondary-column > article:nth-child(2) > div.image-container > a > img',
    extract: 'src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C4Fetch').href = data[0].results;
  document.getElementById('T2C10Fetch').href = data[3].results;
  document.getElementById('T2C11Fetch').href = 'http://www.bbc.com'+data[6].results;
  document.getElementById('T2C12Fetch').href = 'http://www.bbc.com'+data[9].results;
  document.getElementById('T1H4Fetch').innerHTML = data[1].results;
  document.getElementById('T2H10Fetch').innerHTML = data[4].results;
  document.getElementById('T2H11Fetch').innerHTML = data[7].results;
  document.getElementById('T2H12Fetch').innerHTML = data[10].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("http:'+data[5].results+'")';
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});
