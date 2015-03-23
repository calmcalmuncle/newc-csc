var branch;
var categoryChoice;
var subcategoryChoice;

//Branch
function setBranch(Branchy){
	branch = Branchy;
}

//Category Choice
function setCategoryChoice(categoryChoicey){
	categoryChoice = categoryChoicey;
}

//Subcategory Choice
function setSubcategoryChoice(subcategoryChoicey){

	//Set Subcategory Choice
	if(categoryChoice == "ChooseNews"){
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "BBC News";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "Al Jazeera";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "Sky News";
		}
		else{
			subcategoryChoice = "Daily Mail";
		}
	}
	
	else if(categoryChoice == "ChooseVideo"){
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "Popular";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "In the News";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "Comedy";
		}
		else{
			subcategoryChoice = "Music";
		}
	}
	
	else if(categoryChoice == "ChooseSport"){
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "BBC";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "Sport.co.uk";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "Sky";
		}
		else{
			subcategoryChoice = "Other";
		}
	}
	
	else if(categoryChoice == "ChooseFashion"){
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "Vogue";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "Grazia";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "Elle";
		}
		else{
			subcategoryChoice = "Other";
		}
	}
	
	else if(categoryChoice == "ChooseScience"){
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "BBC";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "New Scientist";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "AAAS";
		}
		else{
			subcategoryChoice = "(e)Science News";
		}
	}
	
	else if(categoryChoice == "ChooseTechnology"){
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "BBC";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "Tech Review";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "Sky";
		}
		else{
			subcategoryChoice = "Tech Crunch";
		}
	}
	
	else{
		if(subcategoryChoicey == "SC1"){
			subcategoryChoice = "FIXME";
		}
		else if(subcategoryChoicey == "SC2"){
			subcategoryChoice = "FIXME";
		}
		else if(subcategoryChoicey == "SC3"){
			subcategoryChoice = "FIXME";
		}
		else{
			subcategoryChoice = "FIXME";
		}
	}
	

	Custom();
	
}


//CUSTOM
function Custom(){
	
//Set Central Circle Titles
if(branch == "BranchOne"){
		document.getElementById('T0B1Text').innerHTML = subcategoryChoice;
	}
else if(branch == "BranchTwo"){
		document.getElementById('T0B2Text').innerHTML = subcategoryChoice;
	}
else if(branch == "BranchThree"){
		document.getElementById('T0B3Text').innerHTML = subcategoryChoice;
	}
else{
		document.getElementById('T0B4Text').innerHTML = subcategoryChoice;
	}
	
//Set Branch Fetches
if(branch == "BranchOne"){
	
	var fetch1 = 'T1C1Fetch';
	var fetch2 = 'T2C1Fetch';
	var fetch3 = 'T2C2Fetch';
	var fetch4 = 'T2C3Fetch';
	var fetch5 = 'T1H1Fetch';
	var fetch6 = 'T2H1Fetch';
	var fetch7 = 'T2H2Fetch';
	var fetch8 = 'T2H3Fetch';

}
else if(branch == "BranchTwo"){
	
	var fetch1 = 'T1C2Fetch';
	var fetch2 = 'T2C4Fetch';
	var fetch3 = 'T2C5Fetch';
	var fetch4 = 'T2C6Fetch';
	var fetch5 = 'T1H2Fetch';
	var fetch6 = 'T2H4Fetch';
	var fetch7 = 'T2H5Fetch';
	var fetch8 = 'T2H6Fetch';
}
else if(branch == "BranchThree"){
	
	var fetch1 = 'T1C3Fetch';
	var fetch2 = 'T2C7Fetch';
	var fetch3 = 'T2C8Fetch';
	var fetch4 = 'T2C9Fetch';
	var fetch5 = 'T1H3Fetch';
	var fetch6 = 'T2H7Fetch';
	var fetch7 = 'T2H8Fetch';
	var fetch8 = 'T2H9Fetch';
}
else{
	
	var fetch1 = 'T1C4Fetch';
	var fetch2 = 'T2C10Fetch';
	var fetch3 = 'T2C11Fetch';
	var fetch4 = 'T2C12Fetch';
	var fetch5 = 'T1H4Fetch';
	var fetch6 = 'T2H10Fetch';
	var fetch7 = 'T2H11Fetch';
	var fetch8 = 'T2H12Fetch';
}
	
//BBC
if(subcategoryChoice == "BBC News"){

var query = bbcNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = 'http://www.bbc.co.uk'+data[0].results;
  document.getElementById(fetch2).href = 'http://www.bbc.co.uk'+data[3].results;
  document.getElementById(fetch3).href = 'http://www.bbc.co.uk'+data[6].results;
  document.getElementById(fetch4).href = 'http://www.bbc.co.uk'+data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById(fetch2).style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById(fetch3).style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById(fetch4).style.backgroundImage = 'url("'+data[11].results+'")';
});
}
//Al Jazeera
if(subcategoryChoice == "Al Jazeera"){

var query = alJazeeraNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = 'http://www.aljazeera.com'+data[0].results;
  document.getElementById(fetch2).href = 'http://www.aljazeera.com'+data[3].results;
  document.getElementById(fetch3).href = 'http://www.aljazeera.com'+data[6].results;
  document.getElementById(fetch4).href = 'http://www.aljazeera.com'+data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url(http://www.aljazeera.com'+data[2].results+')';
  document.getElementById(fetch2).style.backgroundImage = 'url(http://www.aljazeera.com'+data[5].results+')';
  document.getElementById(fetch3).style.backgroundImage = 'url(http://www.aljazeera.com'+data[8].results+')';
  document.getElementById(fetch4).style.backgroundImage = 'url(http://www.aljazeera.com'+data[11].results+')';
});
}	
//Sky News
if(subcategoryChoice == "Sky News"){

var query = skyNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = 'http://news.sky.com'+data[0].results;
  document.getElementById(fetch2).href = 'http://news.sky.com'+data[3].results;
  document.getElementById(fetch3).href = 'http://news.sky.com'+data[6].results;
  document.getElementById(fetch4).href = 'http://news.sky.com'+data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById(fetch2).style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById(fetch3).style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById(fetch4).style.backgroundImage = 'url("'+data[11].results+'")';
});
}
//Daily Mail
if(subcategoryChoice == "Daily Mail"){

var query = dailyMailNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = "http://www.dailymail.co.uk/" +data[0].results;
  document.getElementById(fetch2).href = "http://www.dailymail.co.uk/" +data[3].results;
  document.getElementById(fetch3).href = "http://www.dailymail.co.uk/" +data[6].results;
  document.getElementById(fetch4).href = "http://www.dailymail.co.uk/" +data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById(fetch2).style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById(fetch3).style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById(fetch4).style.backgroundImage = 'url("'+data[11].results+'")';
});
}

//Popular
if(subcategoryChoice == "BBC News"){

var query = bbcNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = 'http://www.bbc.co.uk'+data[0].results;
  document.getElementById(fetch2).href = 'http://www.bbc.co.uk'+data[3].results;
  document.getElementById(fetch3).href = 'http://www.bbc.co.uk'+data[6].results;
  document.getElementById(fetch4).href = 'http://www.bbc.co.uk'+data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById(fetch2).style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById(fetch3).style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById(fetch4).style.backgroundImage = 'url("'+data[11].results+'")';
});
}
//In the News
if(subcategoryChoice == "Al Jazeera"){

var query = alJazeeraNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = 'http://www.aljazeera.com'+data[0].results;
  document.getElementById(fetch2).href = 'http://www.aljazeera.com'+data[3].results;
  document.getElementById(fetch3).href = 'http://www.aljazeera.com'+data[6].results;
  document.getElementById(fetch4).href = 'http://www.aljazeera.com'+data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url(http://www.aljazeera.com'+data[2].results+')';
  document.getElementById(fetch2).style.backgroundImage = 'url(http://www.aljazeera.com'+data[5].results+')';
  document.getElementById(fetch3).style.backgroundImage = 'url(http://www.aljazeera.com'+data[8].results+')';
  document.getElementById(fetch4).style.backgroundImage = 'url(http://www.aljazeera.com'+data[11].results+')';
});
}	
//Comedy
if(subcategoryChoice == "Sky News"){

var query = skyNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = 'http://news.sky.com'+data[0].results;
  document.getElementById(fetch2).href = 'http://news.sky.com'+data[3].results;
  document.getElementById(fetch3).href = 'http://news.sky.com'+data[6].results;
  document.getElementById(fetch4).href = 'http://news.sky.com'+data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById(fetch2).style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById(fetch3).style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById(fetch4).style.backgroundImage = 'url("'+data[11].results+'")';
});
}
//Music
if(subcategoryChoice == "Daily Mail"){

var query = dailyMailNewsQuery,
			uriQuery = encodeURIComponent(JSON.stringify(query)),
			request  = 'http://treemac.herokuapp.com/?q=' +
						uriQuery + '&callback=?';
			 
			 
	// Make Ajax request to Noodle server
jQuery.getJSON(request, function (data) {
  document.getElementById(fetch1).href = "http://www.dailymail.co.uk/" +data[0].results;
  document.getElementById(fetch2).href = "http://www.dailymail.co.uk/" +data[3].results;
  document.getElementById(fetch3).href = "http://www.dailymail.co.uk/" +data[6].results;
  document.getElementById(fetch4).href = "http://www.dailymail.co.uk/" +data[9].results;
  document.getElementById(fetch5).innerHTML = data[1].results;
  document.getElementById(fetch6).innerHTML = data[4].results;
  document.getElementById(fetch7).innerHTML = data[7].results;
  document.getElementById(fetch8).innerHTML = data[10].results;
  document.getElementById(fetch1).style.backgroundImage = 'url("'+data[2].results+'")';
  document.getElementById(fetch2).style.backgroundImage = 'url("'+data[5].results+'")';
  document.getElementById(fetch3).style.backgroundImage = 'url("'+data[8].results+'")';
  document.getElementById(fetch4).style.backgroundImage = 'url("'+data[11].results+'")';
});
}

}


//FULL TREES
function NewsTree() {
	document.getElementById('T0B1Text').innerHTML = "BBC";
	document.getElementById('T0B2Text').innerHTML = "Al Jazeera";
	document.getElementById('T0B3Text').innerHTML = "Sky";
	document.getElementById('T0B4Text').innerHTML = "Daily Mail";
	
	
//BBC NEWS
var query = bbcNewsQuery,
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


// Al Jazeera
var query = alJazeeraNewsQuery,
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

//Sky News
var query = skyNewsQuery,
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

//Daily Mail
var query = dailyMailNewsQuery,
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

var query = popularVideoQuery,
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

var query = inTheNewsVideoQuery,
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

var query = comedyVideoQuery,
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




var query = musicVideoQuery,
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
	
	var query = bbcSportQuery,
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

var query = sportCoUkSportQuery,
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

var query = skySportQuery,
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

var query = otherSportQuery,
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
	
	var query = vogueFashionQuery,
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

var query = graziaFashionQuery,
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

var query = elleFashionQuery,
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

var query = otherFashionQuery,
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
	
	var query = bbcScienceQuery,
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

var query = newScientistScienceQuery,
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

var query = aaasScienceQuery,
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

var query = eScienceQuery,
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
	
	var query = bbcTechnologyQuery,
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



var query = techReviewTechnologyQuery,
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
  
var query = skyTechnologyQuery,
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


var query = techCrunchTechnologyQuery,
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

//News
var bbcNewsQuery=[{url:"http://www.bbc.co.uk/news/",selector:"#top-story > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#top-story > h2",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#top-story > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#most-popular > div.panel.open > ol > li.ol2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#second-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#second-story > div > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#third-story > div > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#third-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#third-story > div > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#explainers > ul > li.small-image.column-1.first-child > h3 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#explainers > ul > li.small-image.column-1.first-child > h3 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/",selector:"#explainers > ul > li.small-image.column-1.first-child > h3 > a > img",extract:"src",cache:"false"}];
var alJazeeraNewsQuery=[{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > a",extract:"href",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > div > h1 > a",extract:"text",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.da-all.blurb-wide.clearfix > a > img",extract:"src",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > div > h1 > a",extract:"href",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > div > h1 > a",extract:"text",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db1.tb1.blurb.clearfix > a > img",extract:"src",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > div > h1 > a",extract:"href",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > div > h1 > a",extract:"text",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db2.tb2.blurb.clearfix > a > img",extract:"src",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > div > h1 > a",extract:"href",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > div > h1 > a",extract:"text",cache:"false"},{url:"http://www.aljazeera.com/topics/regions/europe.html",type:"html",selector:"#main-content > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > article.item.db3.tb3.blurb.clearfix > a > img",extract:"src",cache:"false"}];
var skyNewsQuery=[{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a",extract:"href",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a",extract:"href",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a",extract:"href",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--7.section-top-stories__item--odd > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a",extract:"href",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/uk",type:"html",selector:"body > div.viewport > div.main > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--8.section-top-stories__item--even > a > div > div > img",extract:"src",cache:"false"}];
var dailyMailNewsQuery=[{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(1) > h2 > a",extract:"href",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(1) > h2",extract:"text",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(1) > div.articletext > a > img",extract:"src",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(2) > h2 > a",extract:"href",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(2) > h2 > a",extract:"text",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(2) > div.articletext > a > img",extract:"src",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(3) > h2 > a",extract:"href",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(3) > h2 > a",extract:"text",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(3) > div.articletext > a > img",extract:"src",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(4) > h2 > a",extract:"href",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(4) > h2 > a",extract:"text",cache:"false"},{url:"http://www.dailymail.co.uk/news/mostread/index.html?period=DAILY&channel=home",type:"html",selector:"#r0c1p0 > div.js-headers.site-most-read-group.js-accordion.home.collapsed > div.site-most-read-content.link-bow.home.js-close.cleared > div:nth-child(4) > div.articletext > a > img",extract:"src",cache:"false"}];

//Video - Are these all the same?
var popularVideoQuery=[{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(1) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"}];
var inTheNewsVideoQuery=[{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(2) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"}];
var comedyVideoQuery=[{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(8) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"}];
var musicVideoQuery=[{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(1) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(2) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(3) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-thumbnail > span > a",extract:"href",cache:"false"},{url:"https://www.youtube.com/channel/UCR44SO_mdyRq-aTJHO5QxAw",selector:"#browse-items-primary > li:nth-child(3) > div.feed-item-dismissable > div > div > div > div.compact-shelf.shelf-item.yt-uix-shelfslider.yt-uix-shelfslider-at-head.vve-check.clearfix.yt-section-hover-container.yt-uix-tdl > div > div > ul > li:nth-child(4) > div > div.yt-lockup-dismissable > div.yt-lockup-content > h3 > a",extract:"title",cache:"false"}];

//Sport
var bbcSportQuery=[{url:"http://www.bbc.co.uk/sport/",selector:"#story-2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#story-2 > a > span.headline-wrapper",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#story-2 > a > span.image-wrapper.image-small > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#story-3 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#story-3 > a > span.headline-wrapper",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#story-3 > a > span.image-wrapper.image-small > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#live-first-story > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#live-first-story > a > h2",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#live-first-story > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#live-story-2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#live-story-2 > a > span.headline-wrapper",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/sport/",selector:"#live-story-2 > a > span.image-wrapper.image-medium > img",extract:"src",cache:"false"}];
var sportCoUkSportQuery=[{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(1) > a",extract:"href",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(1) > a",extract:"text",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(1) > a > div > img",extract:"src",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(2) > a",extract:"href",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(2) > a",extract:"text",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(2) > a > div > img",extract:"src",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(3) > a",extract:"href",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(3) > a",extract:"text",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(3) > a > div > img",extract:"src",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(4) > a",extract:"href",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(4) > a",extract:"text",cache:"false"},{url:"http://www.sport.co.uk/",type:"html",selector:"#main-story-module > ul:nth-child(2) > li:nth-child(4) > a > div > img",extract:"src",cache:"false"}];
var skySportQuery=[{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > h4 > a",extract:"href",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > h4 > a",extract:"text",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(1) > a > img",extract:"src",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > h4 > a",extract:"href",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > h4 > a",extract:"text",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(2) > a > img",extract:"src",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > h4 > a",extract:"href",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > h4 > a",extract:"text",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(3) > a > img",extract:"src",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > h4 > a",extract:"href",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > h4 > a",extract:"text",cache:"false"},{url:"http://www.skysports.com/",type:"html",selector:"body > div.site-wrapper > div > div > div > div.v5-2col-t3 > div.col1 > div:nth-child(5) > ul > li:nth-child(4) > a > img",extract:"src",cache:"false"}];
var otherSportQuery=[{url:"http://www.mirror.co.uk/sport/",type:"html",selector:"#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a",extract:"href",cache:"false"},{url:"http://www.mirror.co.uk/sport/",type:"html",selector:"#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > h3 > a",extract:"text",cache:"false"},{url:"http://www.mirror.co.uk/sport/",type:"html",selector:"#row1 > div.tmCol.span-6.last.col-2 > div:nth-child(2) > figure > a > img",extract:"src",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > a",extract:"href",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > a",extract:"text",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(1) > div > div > div.fc-item__media-wrapper > div > img",extract:"src",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a",extract:"href",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a",extract:"text",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img",extract:"src",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > a",extract:"href",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > a",extract:"text",cache:"false"},{url:"http://www.theguardian.com/uk/sport",type:"html",selector:"#sport > div > div.fc-container--rolled-up-hide.fc-container__body > div:nth-child(2) > ul > li:nth-child(2) > div > div > div.fc-item__media-wrapper > div > img",extract:"src",cache:"false"}];

//Fashion
var vogueFashionQuery=[{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(1) > figure > figcaption > strong > a",extract:"href",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(1) > figure > figcaption > strong > a",extract:"text",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(1) > figure > div > div > a > img",extract:"src",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(2) > figure > figcaption > strong > a",extract:"href",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(2) > figure > figcaption > strong > a",extract:"text",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(2) > figure > div > div > a > img",extract:"src",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(3) > figure > figcaption > strong > a",extract:"href",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(3) > figure > figcaption > strong > a",extract:"text",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(3) > figure > div > div > a > img",extract:"src",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(4) > figure > figcaption > strong > a",extract:"href",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(4) > figure > figcaption > strong > a",extract:"text",cache:"false"},{url:"http://www.vogue.co.uk/?international",type:"html",selector:"#Centre > div.hppHolder > div.hppNews > ul > li:nth-child(4) > figure > div > div > a > img",extract:"src",cache:"false"}];
var graziaFashionQuery=[{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(1) > article.hot-story.story-1.col-md-10.col-lg-20 > a",extract:"href",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(1) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4",extract:"text",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(1) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img",extract:"src",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-1.col-md-10.col-lg-20 > a",extract:"href",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4",extract:"text",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img",extract:"src",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(3) > article.hot-story.story-1.col-md-10.col-lg-20 > a",extract:"href",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(3) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4",extract:"text",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(3) > article.hot-story.story-1.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img",extract:"src",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-2.col-md-10.col-lg-20 > a",extract:"href",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-2.col-md-10.col-lg-20 > a > div.article-text-container.col-xs-14 > div > h4",extract:"text",cache:"false"},{url:"http://www.graziadaily.co.uk/",type:"html",selector:"#hot-stories-slide-1 > div:nth-child(2) > article.hot-story.story-2.col-md-10.col-lg-20 > a > div.article-image.col-xs-6 > img",extract:"src",cache:"false"}];
var elleFashionQuery=[{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(8) > div > div.landing-feed--story-content > a",extract:"href",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(8) > div > div.landing-feed--story-content > a",extract:"text",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(8) > div > div.landing-feed--story-image > a > div > img",extract:"data-src",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(9) > div > div.landing-feed--story-content > a",extract:"href",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(9) > div > div.landing-feed--story-content > a",extract:"text",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(9) > div > div.landing-feed--story-image > a > div > img",extract:"data-src",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(10) > div > div.landing-feed--story-content > a",extract:"href",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(10) > div > div.landing-feed--story-content > a",extract:"text",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(10) > div > div.landing-feed--story-image > a > div > img",extract:"data-src",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(11) > div > div.landing-feed--story-content > a",extract:"href",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(11) > div > div.landing-feed--story-content > a",extract:"text",cache:"false"},{url:"http://www.elle.com/fashion/",type:"html",selector:"#page-1 > div:nth-child(11) > div > div.landing-feed--story-image > a > div > img",extract:"data-src",cache:"false"}];
var otherFashionQuery=[{url:"http://www.vogue.com/?us_site=y",type:"html",selector:"#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(2) > div.feed-card--info > h2 > a",extract:"href",cache:"false"},{url:"http://www.vogue.com/?us_site=y",type:"html",selector:"#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(2) > div.feed-card--info > h2 > a",extract:"text",cache:"false"},{url:"http://www.vogue.com/?us_site=y",type:"html",selector:"#main > div.feed-page.feed-page__home > div.feed-page--left > article:nth-child(3) > div.feed-card--image > a > picture",extract:"data-src",cache:"false"},{url:"http://www.theguardian.com/fashion",type:"html",selector:"#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a",extract:"href",cache:"false"},{url:"http://www.theguardian.com/fashion",type:"html",selector:"#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > a",extract:"text",cache:"false"},{url:"http://www.theguardian.com/fashion",type:"html",selector:"#fashion > div > div.fc-container--rolled-up-hide.fc-container__body.fc-show-more--hidden > div:nth-child(1) > ul > li.fc-slice__item.l-row__item.l-row__item--span-3.u-faux-block-link > div > div > div.fc-item__media-wrapper > div > img",extract:"src",cache:"false"},{url:"http://fashion.telegraph.co.uk/",type:"html",selector:"#Carousel1_ctl00_ctl06_ContainingFormView_hypBottomLink1",extract:"href",cache:"false"},{url:"http://fashion.telegraph.co.uk/",type:"html",selector:"#Carousel1_ctl00_ctl06_ContainingFormView_hypBottomLink1 > span.colourTtl.sp.themeColor",extract:"text",cache:"false"},{url:"http://fashion.telegraph.co.uk/",type:"html",selector:"#Carousel1_ctl00_ctl06_ContainingFormView_imgMain1",extract:"src",cache:"false"},{url:"http://www.vogue.com/fashion/trends/",type:"html",selector:"#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > h3 > a",extract:"href",cache:"false"},{url:"http://www.vogue.com/fashion/trends/",type:"html",selector:"#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > h3 > a",extract:"text",cache:"false"},{url:"http://www.vogue.com/fashion/trends/",type:"html",selector:"#main > article.hero.multi-story.multi-story__recommended > div > ul > li:nth-child(1) > div > a > picture",extract:"data-src",cache:"false"}];

//Science
var bbcScienceQuery=[{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#top-story > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#top-story > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#top-story > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#second-story > div > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#second-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#second-story > div > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#third-story > div > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#third-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#third-story > div > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#features-and-analysis > ul > li:nth-child(2) > h3 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#features-and-analysis > ul > li:nth-child(2) > h3 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/science_and_environment/",type:"html",selector:"#features-and-analysis > ul > li:nth-child(2) > h3 > a > img",extract:"src",cache:"false"}];
var newScientistScienceQuery=[{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(2) > h3 > a",extract:"href",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(2) > h3 > a",extract:"text",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(2) > div > a > img",extract:"src",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(3) > h3 > a",extract:"href",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(3) > h3 > a",extract:"text",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(3) > div > a > img",extract:"src",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(4) > h3 > a",extract:"href",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(4) > h3 > a",extract:"text",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(4) > div > a > img",extract:"src",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(5) > h3 > a",extract:"href",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(5) > h3 > a",extract:"text",cache:"false"},{url:"http://www.newscientist.com/section/science-news",type:"html",selector:"#maincol > div > div.pnl.listpnl > div:nth-child(5) > div > a > img",extract:"src",cache:"false"}];
var aaasScienceQuery=[{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > h3 > a",extract:"href",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > h3 > a",extract:"text",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(1) > a > img",extract:"src",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > h3 > a",extract:"href",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > h3 > a",extract:"text",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(2) > a > img",extract:"src",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > h3 > a",extract:"href",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > h3 > a",extract:"text",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(3) > a > img",extract:"src",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > h3 > a",extract:"href",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > h3 > a",extract:"text",cache:"false"},{url:"http://news.sciencemag.org/",type:"html",selector:"body > div.wrap-outer > div > div > div:nth-child(3) > div.content-primary > div.content-primary__main > div:nth-child(1) > div > div > ul > li:nth-child(4) > a > img",extract:"src",cache:"false"}];
var eScienceQuery=[{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > div > h2 > a",extract:"href",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.append-1 > div.top-story > a > img",extract:"src",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > h2 > a",extract:"href",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > h2 > a",extract:"text",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(2) > p > a > img",extract:"src",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > h2 > a",extract:"href",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > h2 > a",extract:"text",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.last > div:nth-child(4) > p > a > img",extract:"src",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > h2 > a",extract:"href",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > h2 > a",extract:"text",cache:"false"},{url:"http://esciencenews.com/",type:"html",selector:"#content > div.span-19.colborder > div > div.span-9.append-1 > div:nth-child(2) > p > a > img",extract:"src",cache:"false"}];

//Technology
var bbcTechnologyQuery=[{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#top-story > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#top-story > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#top-story > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#second-story > div > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#second-story > div > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#second-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#third-story > div > h2 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#third-story > div > h2 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#third-story > div > h2 > a",extract:"text",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#features-and-analysis > ul > li.first-child.large-image > h3 > a",extract:"href",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#features-and-analysis > ul > li.first-child.large-image > h3 > a > img",extract:"src",cache:"false"},{url:"http://www.bbc.co.uk/news/technology/",type:"html",selector:"#features-and-analysis > ul > li.first-child.large-image > h3 > a",extract:"text",cache:"false"}];
var techReviewTechnologyQuery=[{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a",extract:"href",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a > article > img",extract:"src",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(1) > a > article > h1",extract:"text",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a",extract:"href",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a > article > img",extract:"src",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(2) > a > article > h1",extract:"text",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a",extract:"href",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a > article > img",extract:"src",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(3) > a > article > h1",extract:"text",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a",extract:"href",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a > article > img",extract:"src",cache:"false"},{url:"http://www.technologyreview.com/",type:"html",selector:"#section-news > div.hp-content > div > div.scroll-wrapper.left > div > section:nth-child(2) > ul > li:nth-child(4) > a > article > h1",extract:"text",cache:"false"}];
var skyTechnologyQuery=[{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a",extract:"href",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--1.section-top-stories__item--odd > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a",extract:"href",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--3.section-top-stories__item--odd > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a",extract:"href",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(2) > ol > li.section-top-stories__item.section-top-stories__item--4.section-top-stories__item--even > a > span",extract:"text",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a",extract:"href",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > div > div > img",extract:"src",cache:"false"},{url:"http://news.sky.com/technology",type:"html",selector:"body > div.viewport > div.main.main--sponsored > div > div > div > div:nth-child(3) > ol > li.section-top-stories__item.section-top-stories__item--6.section-top-stories__item--even > a > span",extract:"text",cache:"false"}];
var techCrunchTechnologyQuery=[{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a",extract:"href",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a > div > h2",extract:"text",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > div > a > img",extract:"src",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a",extract:"href",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a > div > h2",extract:"text",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(1) > a > img",extract:"src",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a",extract:"href",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a > div > h2",extract:"text",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(2) > a > img",extract:"src",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a",extract:"href",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a > div > h2",extract:"text",cache:"false"},{url:"http://techcrunch.com/",type:"html",selector:"body > div.fluid.flush.split.homepage > div.lc.flush.lc-island > div > div.l-main-container > div > div.island.plain-island > ul > li:nth-child(3) > a > img",extract:"src",cache:"false"}];