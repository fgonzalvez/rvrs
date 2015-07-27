videoGameList = document.getElementsByClassName('games')[0].getElementsByTagName('a');
gameSelected = videoGameList[ Math.floor((Math.random() * videoGameList.length) + 1)];
gameSelected.scrollIntoView(true);
gameSelected.style.backgroundColor = "red";
