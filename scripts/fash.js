var query = [
  {
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(1) > figure > figcaption > strong > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(1) > figure > figcaption > strong > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(1) > figure > div > div > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(2) > figure > figcaption > strong > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(2) > figure > figcaption > strong > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(2) > figure > div > div > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(3) > figure > figcaption > strong > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(3) > figure > figcaption > strong > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(3) > figure > div > div > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(4) > figure > figcaption > strong > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(4) > figure > figcaption > strong > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.vogue.co.uk/?international',
    type: 'html',
    selector: '#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(4) > figure > div > div > a > img',
    extract: 'src',
    cache: 'false'
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C1Fetch').href = 'http://www.vogue.co.uk'+data[0].results;
  document.getElementById('T2C1Fetch').href = 'http://www.vogue.co.uk'+data[3].results;
  document.getElementById('T2C2Fetch').href = 'http://www.vogue.co.uk'+data[6].results;
  document.getElementById('T2C3Fetch').href = 'http://www.vogue.co.uk'+data[9].results;
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
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(1) > article.hot-story.story-1.col-md-10.col-lg-20 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(1) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(1) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-1.col-md-10.col-lg-20 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(3) > article.hot-story.story-1.col-md-10.col-lg-20 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(3) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(3) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-2.col-md-10.col-lg-20 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-2.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.graziadaily.co.uk/',
    type: 'html',
    selector: '#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-2.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img',
    extract: 'src',
    cache: 'false'
  }
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C2Fetch').href = 'http://www.graziadaily.co.uk'+data[0].results;
  document.getElementById('T2C4Fetch').href = 'http://www.graziadaily.co.uk'+data[3].results;
  document.getElementById('T2C5Fetch').href = 'http://www.graziadaily.co.uk'+data[6].results;
  document.getElementById('T2C6Fetch').href = 'http://www.graziadaily.co.uk'+data[9].results;
  document.getElementById('T1H2Fetch').innerHTML = data[1].results;
  document.getElementById('T2H4Fetch').innerHTML = data[4].results;
  document.getElementById('T2H5Fetch').innerHTML = data[7].results;
  document.getElementById('T2H6Fetch').innerHTML = data[10].results;
  document.getElementById('T1C2Fetch').style.backgroundImage = 'url("http:'+data[2].results+'")';
  document.getElementById('T2C4Fetch').style.backgroundImage = 'url("http:'+data[5].results+'")';
  document.getElementById('T2C5Fetch').style.backgroundImage = 'url("http:'+data[8].results+'")';
  document.getElementById('T2C6Fetch').style.backgroundImage = 'url("http:'+data[11].results+'")';
});

var query = [
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(8) > div > div.landing-feed--story-content > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(8) > div > div.landing-feed--story-content > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(8) > div > div.landing-feed--story-image > a > div > img',
    extract: 'data-src',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(9) > div > div.landing-feed--story-content > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(9) > div > div.landing-feed--story-content > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(9) > div > div.landing-feed--story-image > a > div > img',
    extract: 'data-src',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(10) > div > div.landing-feed--story-content > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(10) > div > div.landing-feed--story-content > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(10) > div > div.landing-feed--story-image > a > div > img',
    extract: 'data-src',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(11) > div > div.landing-feed--story-content > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(11) > div > div.landing-feed--story-content > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.elle.com/fashion/',
    type: 'html',
    selector: '#page-1 > div:nth-child(11) > div > div.landing-feed--story-image > a > div > img',
    extract: 'data-src',
    cache: 'false'
  }

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = 'http://www.elle.com'+data[0].results;
  document.getElementById('T2C7Fetch').href = 'http://www.elle.com'+data[3].results;
  document.getElementById('T2C8Fetch').href = 'http://www.elle.com'+data[6].results;
  document.getElementById('T2C9Fetch').href = 'http://www.elle.com'+data[9].results;
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
    url: 'http://www.vogue.com/?us_site=y',
    type: 'html',
    selector: '#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(2) > div.feed-card--info > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.vogue.com/?us_site=y',
    type: 'html',
    selector: '#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(2) > div.feed-card--info > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.vogue.com/?us_site=y',
    type: 'html',
    selector: '#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(3) > div.feed-card--image > a > picture',
    extract: 'data-src',
    cache: 'false'
  },
  {
    url: 'http://www.theguardian.com/fashion',
    type: 'html',
    selector: '#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/fashion',
    type: 'html',
    selector: '#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/fashion',
    type: 'html',
    selector: '#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://fashion.telegraph.co.uk/',
    type: 'html',
    selector: '#Carousel1_ctl00_ctl06_ContainingFormView_hypBottomLink1',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://fashion.telegraph.co.uk/',
    type: 'html',
    selector: '#Carousel1_ctl00_ctl06_ContainingFormView_hypBottomLink1 > span.colourTtl.sp.themeColor',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://fashion.telegraph.co.uk/',
    type: 'html',
    selector: '#Carousel1_ctl00_ctl06_ContainingFormView_imgMain1',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.vogue.com/fashion/trends/',
    type: 'html',
    selector: '#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.vogue.com/fashion/trends/',
    type: 'html',
    selector: '#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.vogue.com/fashion/trends/',
    type: 'html',
    selector: '#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > div > a > picture',
    extract: 'data-src',
    cache: 'false'
  }
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
document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});




