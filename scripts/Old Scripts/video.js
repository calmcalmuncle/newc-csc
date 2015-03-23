function BranchOne() {
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


