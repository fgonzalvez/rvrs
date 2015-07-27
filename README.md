Random videogame ROM selector (rvrs)
==================

Do you want to play classic games but can't decide? 

#### Put inside your bookmarks

```js
javascript:(function(){videoGameList=document.getElementsByClassName("games")[0].getElementsByTagName("a"),numberSelected=Math.floor(Math.random()*videoGameList.length+1),gameSelected=videoGameList[numberSelected],gameSelected.scrollIntoView(!0),gameSelected.style.backgroundColor="red"})();
```
<br>

![Gif how rvrs works (bookmark)](http://i.gyazo.com/15c868b4e42559808e69365436aaa549.gif)

<br>

#### Put a button on page

(Example: Chrome)

1. Open Browser 
2. Enter http://www.rom-world.com/
3. Select a console platform in the left bar
4. Select a letter [A-Z]
5. Push Crtl + Shift + I (open console) and paste following code;

```js
function searchGame(){var e=Math.floor(Math.random()*videoGameList.length+1),t=videoGameList[e];t.scrollIntoView(!0),t.style.backgroundColor="red"}var rowInserted=document.getElementsByTagName("table")[9].insertRow();rowInserted.innerHTML="<button onclick='searchGame()'> Get Random Game </button>";var videoGameList=document.getElementsByClassName("games")[0].getElementsByTagName("a");
```
And push Intro

A button will appear and you just have to click it.

![Gif how rvrs works (button)](http://i.gyazo.com/08cf21f8fe1160c72245f1e11ef41d4f.gif)
