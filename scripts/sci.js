var query = [
  {
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#top-story > h2 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#top-story > h2 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#second-story > div > h2 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#second-story > div > h2 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#third-story > div > h2 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#third-story > div > h2 > a > img',
    extract: 'src'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#features-and-analysis > ul > li:nth-child(2) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#features-and-analysis > ul > li:nth-child(2) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.bbc.co.uk/news/science_and_environment/',
    type: 'html',
    selector: '#features-and-analysis > ul > li:nth-child(2) > h3 > a > img',
    extract: 'src'
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
    extract: 'href'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(2) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(2) > div > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(3) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(3) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(3) > div > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(4) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(4) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(4) > div > a > img',
    extract: 'src'
  },
  {
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(5) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(5) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://www.newscientist.com/section/science-news',
    type: 'html',
    selector: '#maincol > div > div.pnl.listpnl > div:nth-child(5) > div > a > img',
    extract: 'src'
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
    extract: 'href'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > a > img',
    extract: 'src'
  },
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > a > img',
    extract: 'src'
  },
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > a > img',
    extract: 'src'
  },
  {
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > h3 > a',
    extract: 'href'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > h3 > a',
    extract: 'text'
  },
{
    url: 'http://news.sciencemag.org/',
    type: 'html',
    selector: 'body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > a > img',
    extract: 'src'
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
    extract: 'href'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > div > h2 > a',
    extract: 'text'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > a > img',
    extract: 'src'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > h2 > a',
    extract: 'href'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > h2 > a',
    extract: 'text'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > p > a > img',
    extract: 'src'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > h2 > a',
    extract: 'href'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > h2 > a',
    extract: 'text'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > p > a > img',
    extract: 'src'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > h2 > a',
    extract: 'href'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > h2 > a',
    extract: 'text'
  },
{
    url: 'http://esciencenews.com/',
    type: 'html',
    selector: '#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > p > a > img',
    extract: 'src'
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




