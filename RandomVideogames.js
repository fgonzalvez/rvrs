function searchGame() {

var numberSelected = Math.floor((Math.random() * videoGameList.length) + 1)

var gameSelected = videoGameList[numberSelected]

gameSelected.scrollIntoView( true )

gameSelected.style.backgroundColor="red"

}

var rowInserted = $('div table').insertRow()

rowInserted.innerHTML = "<button onclick='searchGame()'> Get Random Game </button>"

var videoGameList = $(".games").getElementsByTagName('a')
