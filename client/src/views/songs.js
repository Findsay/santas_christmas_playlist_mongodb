var SongView = function(songs){
  this.render(songs);
}

SongView.prototype = {
  render: function(songs){

    console.log(songs);

    var table = document.getElementById("song-table");

    songs.forEach( function(song){
      var row = document.createElement('tr');

      var cell1 = document.createElement('td');
      cell1.innerText = song.Song;
      row.appendChild(cell1);


      var cell2 = document.createElement('td');
      cell2.innerText = song.Artist;
      row.appendChild(cell2);

      var cell3 = document.createElement('td');

      for( i = 0; i < song.Rating; i++ ){
        var image = document.createElement('img');
        image.src = "/images/santa-icon.png"
        image.width = 25;
        cell3.appendChild(image);
      }
      row.appendChild(cell3);

      table.appendChild(row);

    })
  }
}

 module.exports = SongView;
