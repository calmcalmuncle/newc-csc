
//BranchOne News
function BranchOneNews() {
	var query = [
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2",
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
    selector: "#most-popular > div.panel.open > ol > li.ol2 > a",
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
}

//BranchOne Video
function BranchOneVideo() {
	var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
  document.getElementById('T1C1Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C1Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C2Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C3Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H1Fetch').innerHTML = data[1].results;
  document.getElementById('T2H1Fetch').innerHTML = data[3].results;
  document.getElementById('T2H2Fetch').innerHTML = data[5].results;
  document.getElementById('T2H3Fetch').innerHTML = data[7].results;
  document.getElementById('T1C1Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C1Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C2Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C3Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});
}




function BranchTwo() {
var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
}
function BranchThree() {

var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
  document.getElementById('T1C4Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C10Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C11Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C12Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H4Fetch').innerHTML = data[1].results;
  document.getElementById('T2H10Fetch').innerHTML = data[3].results;
  document.getElementById('T2H11Fetch').innerHTML = data[5].results;
  document.getElementById('T2H12Fetch').innerHTML = data[7].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});


}
function BranchFour() {
var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
  document.getElementById('T1C3Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C7Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C8Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C9Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H3Fetch').innerHTML = data[1].results;
  document.getElementById('T2H7Fetch').innerHTML = data[3].results;
  document.getElementById('T2H8Fetch').innerHTML = data[5].results;
  document.getElementById('T2H9Fetch').innerHTML = data[7].results;
  document.getElementById('T1C3Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C7Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C8Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C9Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});
}



//FULL TREES
function NewsTree() {

document.getElementById('T0B1Text').innerHTML = "BBC";
document.getElementById('T0B2Text').innerHTML = "Al Jazeera";
document.getElementById('T0B3Text').innerHTML = "Daily Mail";
document.getElementById('T0B4Text').innerHTML = "Sky";


var query = [
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2 > a",
    extract: "href",
    cache: 'false'
  },
  {
    url: "http://www.bbc.co.uk/news/",
    selector: "#top-story > h2",
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
    selector: "#most-popular > div.panel.open > ol > li.ol2 > a",
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

var NewsLink2 = "http://www.aljazeera.com/topics/regions/europe.html";

var query = [
/* Tier One Circle One */
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > div > h1 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > a > img',
    extract: 'src',
    cache: 'false'
  },
  /* Tier Two Circle One */
  {
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > div > h1 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > div > h1 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > a > img',
    extract: 'src',
    cache: 'false'
  },
  /* Tier Two Circle Two */
  {
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > div > h1 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > div > h1 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > a > img',
    extract: 'src',
    cache: 'false'
  },
  /* Tier Two Circle Three */
  {
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > div > h1 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > div > h1 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink2,
    type: 'html',
    selector: '#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > a > img',
    extract: 'src',
    cache: 'false'
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
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > span',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > span',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > span',
    extract: 'text',
    cache: 'false'
  },
{
    url: NewsLink3,
    type: 'html',
    selector: 'body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > div > div > img',
    extract: 'src',
    cache: 'false'
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

var NewsLink4 = "http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home";

var query = [
/* Tier One Circle Four */
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(1) > h2 > a',
    extract: 'href',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(1) > h2',
    extract: 'text',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(1) > div.articletext > a > img',
    extract: 'src',
	cache: 'false'
  },
  /* Tier Two Circle One */
  {
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(2) > h2 > a',
    extract: 'href',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(2) > h2 > a',
    extract: 'text',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(2) > div.articletext > a > img',
    extract: 'src',
	cache: 'false'
  },
  /* Tier Two Circle Two */
  {
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(3) > h2 > a',
    extract: 'href',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(3) > h2 > a',
    extract: 'text',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(3) > div.articletext > a > img',
    extract: 'src',
	cache: 'false'
  },
  /* Tier Two Circle three */
  {
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(4) > h2 > a',
    extract: 'href',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(4) > h2 > a',
    extract: 'text',
	cache: 'false'
  },
{
    url: NewsLink4,
    type: 'html',
    selector: '#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(4) > div.articletext > a > img',
    extract: 'src',
	cache: 'false'
  },
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://secret-reaches-3678.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C4Fetch').href = "http://www.dailymail.co.uk/" +data[0].results;
  document.getElementById('T1H4Fetch').innerHTML = data[1].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById('T2C10Fetch').href = "http://www.dailymail.co.uk/" +data[3].results;
  document.getElementById('T2H10Fetch').innerHTML = data[4].results;
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C11Fetch').href = "http://www.dailymail.co.uk/" +data[6].results;
  document.getElementById('T2H11Fetch').innerHTML = data[7].results;
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C12Fetch').href = "http://www.dailymail.co.uk/" +data[9].results;
  document.getElementById('T2H12Fetch').innerHTML = data[10].results;
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});

}

function VideoTree(){
	
	document.getElementById('T0B1Text').innerHTML = "Popular";
	document.getElementById('T0B2Text').innerHTML = "In the News";
	document.getElementById('T0B4Text').innerHTML = "Music";
	document.getElementById('T0B3Text').innerHTML = "Comedy";

var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
  document.getElementById('T1C1Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C1Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C2Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C3Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H1Fetch').innerHTML = data[1].results;
  document.getElementById('T2H1Fetch').innerHTML = data[3].results;
  document.getElementById('T2H2Fetch').innerHTML = data[5].results;
  document.getElementById('T2H3Fetch').innerHTML = data[7].results;
  document.getElementById('T1C1Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C1Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C2Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C3Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});

var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
  document.getElementById('T1C4Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C10Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C11Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C12Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H4Fetch').innerHTML = data[1].results;
  document.getElementById('T2H10Fetch').innerHTML = data[3].results;
  document.getElementById('T2H11Fetch').innerHTML = data[5].results;
  document.getElementById('T2H12Fetch').innerHTML = data[7].results;
  document.getElementById('T1C4Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});




var query = [
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",
    "extract": "href",
    "cache": "false"
  },
  {
    "url": "https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",
    "selector": "#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",
    "extract": "title",
    "cache": "false"
  },

],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'https://secret-reaches-3678.herokuapp.com/?q=' +
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
  document.getElementById('T1C3Fetch').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('T2C7Fetch').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('T2C8Fetch').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('T2C9Fetch').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('T1H3Fetch').innerHTML = data[1].results;
  document.getElementById('T2H7Fetch').innerHTML = data[3].results;
  document.getElementById('T2H8Fetch').innerHTML = data[5].results;
  document.getElementById('T2H9Fetch').innerHTML = data[7].results;
  document.getElementById('T1C3Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('T2C7Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('T2C8Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('T2C9Fetch').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});

}

function SportTree(){
	
	document.getElementById('T0B1Text').innerHTML = "BBC";
	document.getElementById('T0B2Text').innerHTML = "Sport.co.uk";
	document.getElementById('T0B4Text').innerHTML = "Other";
	document.getElementById('T0B3Text').innerHTML = "Sky";
	
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
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(1) > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(1) > a > div > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(2) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(2) > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(2) > a > div > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(3) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(3) > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(3) > a > div > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(4) > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(4) > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.sport.co.uk/',
    type: 'html',
    selector: '#main-story-module > ul:nth-child(2) > li:nth-child(4) > a > div > img',
    extract: 'src',
    cache: 'false'
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
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > h4 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > h4 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > h4 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > h4 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > h4 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > h4 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > h4 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.skysports.com/',
    type: 'html',
    selector: 'body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > a > img',
    extract: 'src',
    cache: 'false'
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
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.mirror.co.uk/sport/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.mirror.co.uk/sport/',
    type: 'html',
    selector: '#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > figure > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.theguardian.com/uk/sport',
    type: 'html',
    selector: '#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > div.fc-item__media-wrapper > div > img',
    extract: 'src',
    cache: 'false'
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
}

function FashionTree(){
	
	document.getElementById('T0B1Text').innerHTML = "Vogue";
	document.getElementById('T0B2Text').innerHTML = "Grazia";
	document.getElementById('T0B4Text').innerHTML = "Other";
	document.getElementById('T0B3Text').innerHTML = "Elle";
	
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
}

function ScienceTree(){
	
	document.getElementById('T0B1Text').innerHTML = "BBC";
	document.getElementById('T0B2Text').innerHTML = "New Scientist";
	document.getElementById('T0B4Text').innerHTML = "(e)Science News";
	document.getElementById('T0B3Text').innerHTML = "AAAS";
	
	var query = [
  {
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#top-story > h2 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#second-story > div > h2 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#third-story > div > h2 > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#features-and-analysis > ul > li:nth-child(2) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#features-and-analysis > ul > li:nth-child(2) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#features-and-analysis > ul > li:nth-child(2) > h3 > a > img',
    extract: 'src',
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
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(2) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(2) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(2) > div > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(3) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(3) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(3) > div > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(4) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(4) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(4) > div > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(5) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(5) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(5) > div > a > img',
    extract: 'src',
    cache: 'false'
  },
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C2Fetch').href = 'http://www.newscientist.com'+data[0].results;
  document.getElementById('T2C4Fetch').href = 'http://www.newscientist.com'+data[3].results;
  document.getElementById('T2C5Fetch').href = 'http://www.newscientist.com'+data[6].results;
  document.getElementById('T2C6Fetch').href = 'http://www.newscientist.com'+data[9].results;
  document.getElementById('T1H2Fetch').innerHTML = data[1].results;
  document.getElementById('T2H4Fetch').innerHTML = data[4].results;
  document.getElementById('T2H5Fetch').innerHTML = data[7].results;
  document.getElementById('T2H6Fetch').innerHTML = data[10].results;
  document.getElementById('T1C2Fetch').style.backgroundImage = 'url("http://www.newscientist.com'+data[2].results+'")';
  document.getElementById('T2C4Fetch').style.backgroundImage = 'url("http://www.newscientist.com'+data[5].results+'")';
  document.getElementById('T2C5Fetch').style.backgroundImage = 'url("http://www.newscientist.com'+data[8].results+'")';
  document.getElementById('T2C6Fetch').style.backgroundImage = 'url("http://www.newscientist.com'+data[11].results+'")';
});

var query = [
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > a > img',
    extract: 'src',
    cache: 'false'
  },
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > h3 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > h3 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > a > img',
    extract: 'src',
    cache: 'false'
  },
],
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById('T1C3Fetch').href = 'http://news.sciencemag.org'+data[0].results;
  document.getElementById('T2C7Fetch').href = 'http://news.sciencemag.org'+data[3].results;
  document.getElementById('T2C8Fetch').href = 'http://news.sciencemag.org'+data[6].results;
  document.getElementById('T2C9Fetch').href = 'http://news.sciencemag.org'+data[9].results;
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
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > div > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > div > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > p > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > p > a > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > h2 > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > h2 > a',
    extract: 'text',
    cache: 'false'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > p > a > img',
    extract: 'src',
    cache: 'false'
  },
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://treemac.herokuapp.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
document.getElementById('T1C4Fetch').href = 'http://esciencenews.com'+data[0].results;
document.getElementById('T2C10Fetch').href = 'http://esciencenews.com'+data[3].results;
document.getElementById('T2C11Fetch').href = 'http://esciencenews.com'+data[6].results;
document.getElementById('T2C12Fetch').href = 'http://esciencenews.com'+data[9].results;

document.getElementById('T1H4Fetch').innerHTML = data[1].results;
document.getElementById('T2H10Fetch').innerHTML = data[4].results;
document.getElementById('T2H11Fetch').innerHTML = data[7].results;
document.getElementById('T2H12Fetch').innerHTML = data[10].results;

document.getElementById('T1C4Fetch').style.backgroundImage = 'url("'+data[2].results+'")';
document.getElementById('T2C10Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});
}

function TechnologyTree(){
	
	document.getElementById('T0B1Text').innerHTML = "BBC";
	document.getElementById('T0B2Text').innerHTML = "Tech Review";
	document.getElementById('T0B4Text').innerHTML = "Tech Crunch";
	document.getElementById('T0B3Text').innerHTML = "Sky";
	
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
  {
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a',
    extract: 'href',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
    selector: 'body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > div > div > img',
    extract: 'src',
    cache: 'false'
  },
{
    url: 'http://news.sky.com/technology',
    type: 'html',
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
  },
  {
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
  document.getElementById('T2C10Fetch').style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById('T2C11Fetch').style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById('T2C12Fetch').style.backgroundImage = 'url("'+data[11].results+'")';
});
}