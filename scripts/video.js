
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
  document.getElementById('Sec2').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('Ter4').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('Ter5').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('Ter6').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('Sec2').title = data[1].results;
  document.getElementById('Ter4').title = data[3].results;
  document.getElementById('Ter5').title = data[5].results;
  document.getElementById('Ter6').title = data[7].results;
  document.getElementById('Sec2').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('Ter4').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('Ter5').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('Ter6').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
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
  document.getElementById('Sec1').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('Ter1').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('Ter2').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('Ter3').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('Sec1').title = data[1].results;
  document.getElementById('Ter1').title = data[3].results;
  document.getElementById('Ter2').title = data[5].results;
  document.getElementById('Ter3').title = data[7].results;
  document.getElementById('Sec1').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('Ter1').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('Ter2').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('Ter3').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
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
  document.getElementById('Sec3').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('Ter7').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('Ter8').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('Ter9').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('Sec3').title = data[1].results;
  document.getElementById('Ter7').title = data[3].results;
  document.getElementById('Ter8').title = data[5].results;
  document.getElementById('Ter9').title = data[7].results;
  document.getElementById('Sec3').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('Ter7').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('Ter8').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('Ter9').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
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
  document.getElementById('Sec4').href = 'https://www.youtube.com/embed/'+res1+'?autoplay=1';
  document.getElementById('Ter10').href = 'https://www.youtube.com/embed/'+res2+'?autoplay=1';
  document.getElementById('Ter11').href = 'https://www.youtube.com/embed/'+res3+'?autoplay=1';
  document.getElementById('Ter12').href = 'https://www.youtube.com/embed/'+res4+'?autoplay=1';
  document.getElementById('Sec4').title = data[1].results;
  document.getElementById('Ter10').title = data[3].results;
  document.getElementById('Ter11').title = data[5].results;
  document.getElementById('Ter12').title = data[7].results;
  document.getElementById('Sec4').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res1+'/mqdefault.jpg")';
  document.getElementById('Ter10').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res2+'/mqdefault.jpg")';
  document.getElementById('Ter11').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res3+'/mqdefault.jpg")';
  document.getElementById('Ter12').style.backgroundImage = 'url("http://i.ytimg.com/vi/'+res4+'/mqdefault.jpg")';
});




