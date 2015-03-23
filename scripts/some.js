var query = [
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2 > a",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2 > a > img",
    extract: "src",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#second-story > div > h2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#second-story > div > h2 > a",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#second-story > div > h2 > a > img",
    extract: "src",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#third-story > div > h2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#third-story > div > h2 > a",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#third-story > div > h2 > a > img",
    extract: "src",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#explainers > ul > li.small-image.column-1.first-child > h3 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#explainers > ul > li.small-image.column-1.first-child > h3 > a",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#explainers > ul > li.small-image.column-1.first-child > h3 > a > img",
    extract: "src",
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
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    extract: "title",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    extract: "title",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    extract: "title",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    selector: "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    extract: "title",
    cache: 'false'
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  var string1 = ""+data[0].results;
  var res1 = string1.substr(9);
  var string2 = ""+data[2].results;
  var res2 = string2.substr(9);
  var string3 = ""+data[4].results;
  var res3 = string3.substr(9);
  var string4 = ""+data[6].results;
  var res4 = string4.substr(9);
  document.getElementById('T1C2Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C4Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C5Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C6Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H2Fetch').innerHTML = data[1].results;
  document.getElementById('T2H4Fetch').innerHTML = data[3].results;
  document.getElementById('T2H5Fetch').innerHTML = data[5].results;
  document.getElementById('T2H6Fetch').innerHTML = data[7].results;
  document.getElementById('T1C2Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C4Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C5Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C6Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});

var query = [
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#story-2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#story-2 > a > span.headline-wrapper",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#story-2 > a > span.image-wrapper.image-small > img",
    extract: "src",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#story-3 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#story-3 > a > span.headline-wrapper",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#story-3 > a > span.image-wrapper.image-small > img",
    extract: "src",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#live-first-story > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#live-first-story > a > h2",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#live-first-story > a > img",
    extract: "src",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#live-story-2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#live-story-2 > a > span.headline-wrapper",
    extract: "text",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/sport/",
    selector: "#live-story-2 > a > span.image-wrapper.image-medium > img",
    extract: "src",
    cache: 'false'
  }

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = 'http://www.bbc.co.uk'+data[0].results;
  document.getElementById('T2C7Fetch').href = 'http://www.bbc.co.uk'+data[3].results;
  document.getElementById('T2C8Fetch').href = 'http://www.bbc.co.uk'+data[6].results;
  document.getElementById('T2C9Fetch').href = 'http://www.bbc.co.uk'+data[9].results;
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
    extract: 'href'
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




