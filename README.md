Random-Vg-Selector
==================

Do you want to play classic games but can't decide? 

1. Open Chrome Browser
2. Enter http://www.rom-world.com/
3. Select console in the left bar
4. Select a leter [A-Z]
5. Push Crtl + Shift + I (open console) and paste following code;

		function searchGame() {
			var numberSelected = Math.floor((Math.random() * videoGameList.length) + 1)
			var gameSelected = videoGameList[numberSelected]
			gameSelected.scrollIntoView( true )
			gameSelected.style.backgroundColor="red"

		}

		var rowInserted = $('div table').insertRow()
		rowInserted.innerHTML = "<button onclick='searchGame()'> Get Random Game </button>"
		var videoGameList = $(".games").getElementsByTagName('a')


6. Push Intro

A button will appear and you just have to click it.
