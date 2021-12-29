let nomPlaylist =$('#nomPlaylist');
let lien = document.querySelector('#lien');
let add =$('#add');
let divPlaylist =$('#playlists');

let arrayPlaylist = [];


function addLink() {
    divPlaylist.html('<a href="'+ lien.value+ '">lien</a>');
}

add.click(function () {
    console.log('salut')
    addLink()
})