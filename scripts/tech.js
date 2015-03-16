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
    url: 'http://www.vogue.com/?us_site=y',
    type: 'html',
    selector: '#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(2) > div.feed-card--info > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.vogue.com/?us_site=y',
    type: 'html',
    selector: '#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(2) > div.feed-card--info > h2 > a',
    extract: 'text'
  },
{
    url: 'http://www.vogue.com/?us_site=y',
    type: 'html',
    selector: '#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(3) > div.feed-card--image > a > picture',
    extract: 'data-src'
  },
  {
    url: 'http://www.theguardian.com/fashion',
    type: 'html',
    selector: '#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'href'
  },
{
    url: 'http://www.theguardian.com/fashion',
    type: 'html',
    selector: '#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'text'
  },
{
    url: 'http://www.theguardian.com/fashion',
    type: 'html',
    selector: '#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src'
  },
{
    url: 'http://fashion.telegraph.co.uk/',
    type: 'html',
    selector: '#Carousel1_ctl00_ctl06_ContainingFormView_hypBottomLink1',
    extract: 'href'
  },
{
    url: 'http://fashion.telegraph.co.uk/',
    type: 'html',
    selector: '#Carousel1_ctl00_ctl06_ContainingFormView_hypBottomLink1 > span.colourTtl.sp.themeColor',
    extract: 'text'
  },
{
    url: 'http://fashion.telegraph.co.uk/',
    type: 'html',
    selector: '#Carousel1_ctl00_ctl06_ContainingFormView_imgMain1',
    extract: 'src'
  },
  {
    url: 'http://www.vogue.com/fashion/trends/',
    type: 'html',
    selector: '#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.vogue.com/fashion/trends/',
    type: 'html',
    selector: '#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.vogue.com/fashion/trends/',
    type: 'html',
    selector: '#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > div > a > picture',
    extract: 'data-src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
document.getElementById('Sec3').href = data[0].results;
document.getElementById('Sec3').title = data[1].results;
document.getElementById('Sec3').style.backgroundImage = 'url("'+data[2].results+'")';
document.getElementById('Ter7').href = data[3].results;
document.getElementById('Ter7').title = data[4].results;
document.getElementById('Ter7').style.backgroundImage = 'url("http:'+data[5].results+'")';
document.getElementById('Ter8').href = data[6].results;
document.getElementById('Ter8').title = data[7].results;
document.getElementById('Ter8').style.backgroundImage = 'url("'+data[8].results+'")';
document.getElementById('Ter9').href = data[9].results;
document.getElementById('Ter9').title = data[10].results;
document.getElementById('Ter9').style.backgroundImage = 'url("'+data[11].results+'")';
});


