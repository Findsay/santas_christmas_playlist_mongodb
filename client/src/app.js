var SongView = require('./views/songs');

var makeRequest = function(url, callback){
  // create a new XHR
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200){
    return;
  }
  var jsonString = this.responseText;
  var songs = JSON.parse(jsonString);
  console.log(songs);
  var ui = new SongView(songs);
};

var loadSongs = function(){
  var url = "/songs";
  makeRequest(url, requestComplete);
};


var app = function(){
  loadSongs();

};

window.addEventListener('load', app);
