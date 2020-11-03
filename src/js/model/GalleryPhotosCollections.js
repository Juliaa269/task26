import {ALBUM_PHOTOS} from '../config';

export default class GalleryPhotosCollection{
    constructor(){
        console.log('GalleryPhotosCollection created');

        this.photos = [];
    }

    getPhotos(albumId){
        console.log('alboum id', albumId)
        return fetch(ALBUM_PHOTOS
            .replace('{{id}}', albumId))
            .then(res => res.json())
            .then((data) => this.photos = data)
    }
}