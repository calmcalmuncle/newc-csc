var query = {
    url: 'http://www.bbc.co.uk/news',
    type: 'html',
    selector: '#comp-candy-asset-munger > div > div.pigeon__column.pigeon__column--b > div:nth-child(1) > a.title-link',
    extract: 'href'
  },
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  var test = data[0].results;
  alert(test);
});