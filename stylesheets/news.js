var query = [
{
    url: 'http://www.style.com/news',
    type: 'html',
    selector: 'body > div.sidebar-navigation__pushed > section > div > div > section:nth-child(2) > div.story-col-unit__column-large.story-col-unit__pull-left > article:nth-child(2) > div.story-item__content > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.style.com/news',
    type: 'html',
    selector: 'body > div.sidebar-navigation__pushed > section > div > div > section:nth-child(2) > div.story-col-unit__column-large.story-col-unit__pull-left > article:nth-child(2) > div.story-item__content > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.style.com/news',
    type: 'html',
    selector: '#image-0',
    extract: 'src'
  }
]
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  alert(data[2].results);
});