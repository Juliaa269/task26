const ALBUM_ITEM_CLASS = 'album-item';

const albumsEl = document.querySelector('#albums');
const photosEl = document.querySelector('#photos');

const albumItem = document.querySelector('#albumItem').innerHTML;
const photoItem = document.querySelector('#photoItem').innerHTML;

albumsEl.addEventListener('click', onAlbumsClick);

init();

function onAlbumsClick(e) {
    switch(true) {
        case (e.target.classList.contains(ALBUM_ITEM_CLASS)):
            getPhotos(e.target.dataset.id);
    }
}

function init() {
    getAlbums();
}

function getAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res) => res.json())
        .then((data) => {
            renderAlbums(data);
                return data;
        })
        .then((data) => {
            if (data.length) {
            getPhotos(data[0].id);
        }})
}

function renderAlbums(data) {
    albumsEl.innerHTML = data
        .map((album) => {
            return albumItem
                .replace('{{id}}', album.id)
                .replace('{{title}}', album.title);
            })
        .join('');
}

function getPhotos(albumId) {
    return fetch('https://jsonplaceholder.typicode.com/photos?albumId={{id}}'
        .replace('{{id}}', albumId))
        .then((res) => res.json())
        .then(renderPhotos);
}

function renderPhotos(data) {
    photosEl.innerHTML = data
        .map((photo) => {
            return photoItem
                .replace('{{url}}', photo.url)
                .replace('{{title}}', photo.title);
        })
        .join('');
}