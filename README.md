Random-Vg-Selector
==================

Do you want to play classic games but can't decide? 

#### Put inside your bookmarks

```js
javascript:(function(){videoGameList=document.getElementsByClassName("games")[0].getElementsByTagName("a"),numberSelected=Math.floor(Math.random()*videoGameList.length+1),gameSelected=videoGameList[numberSelected],gameSelected.scrollIntoView(!0),gameSelected.style.backgroundColor="red"})();
```

<br>

#### Put a button on page

(Example: Chrome)

1. Open Browser 
2. Enter http://www.rom-world.com/
3. Select a console platform in the left bar
4. Select a letter [A-Z]
5. Push Crtl + Shift + I (open console) and paste following code;

```js
function searchGame() {
  var numberSelected = Math.floor((Math.random() * videoGameList.length) + 1);
  var gameSelected = videoGameList[numberSelected];
  gameSelected.scrollIntoView(true);
  gameSelected.style.backgroundColor = "red";
}

var rowInserted = document.getElementsByTagName('table')[9].insertRow();
rowInserted.innerHTML = "<button onclick='searchGame()'> Get Random Game </button>";
var videoGameList = document.getElementsByClassName('games')[0].getElementsByTagName('a');
```
And Push Intro

A button will appear and you just have to click it.
