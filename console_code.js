function searchGame() {
  var numberSelected = Math.floor((Math.random() * videoGameList.length) + 1);
  var gameSelected = videoGameList[numberSelected];
  gameSelected.scrollIntoView(true);
  gameSelected.style.backgroundColor = "red";
}

var rowInserted = document.getElementsByTagName('table')[9].insertRow();
rowInserted.innerHTML = "<button onclick='searchGame()'> Get Random Game </button>";
var videoGameList = document.getElementsByClassName('games')[0].getElementsByTagName('a');
