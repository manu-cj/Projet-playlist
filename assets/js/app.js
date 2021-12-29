let nomPlaylist =document.querySelector('#nomPlaylist');
let lien = document.querySelector('#lien');
let add =$('.add');
let create=$('#create');
let divPlaylist =$('#playlists').clone();
let body = $('body');
let clone =$('#clone');
numéro = 0;

let arrayPlaylist = [];

function createPlaylist() {

    body.append('<div id=maDiv class=classe>'+ '<h1>'+ nomPlaylist.value +'</h1>' +'</div>');
    body.append('<button class=add>'+ '<h1>ADD</h1>' +'</button>');
}

function addLink() {
    $(this).parents().append('<a href="'+ lien.value+ '">'+lien.value+'</a>');
}

function clonage() {
    $('#scorpion').appendChild(divPlaylist.clone());
}

create.click(function () {
    createPlaylist()
})

add.click(function () {
    console.log('salut')
    addLink()
})

clone.click(function () {
clonage()
})