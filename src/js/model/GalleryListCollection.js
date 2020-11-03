import {ALBUMS_LIST} from '../config';

export default class GalleryListCollection{
    constructor(){
        console.log('GalleryListCollection created');

        this.list = [];
    }

    getList(){
        return fetch(ALBUMS_LIST)
            .then(res => res.json())
            .then((data) => this.list = data)
    }

    // toggle(id) {
    //     const listItem = this.list.find(item => item.id == id);

    //     // return fetch(ALBUM_PHOTOS
    //     //     .replace('{{id}}', albumId))
    //     //     .then((res) => res.json())
    //     //     .then(renderPhotos);

    //     // return fetch(`${ALBUM_PHOTOS}`
    //     //     .replace('{{id}}', albumId))
    //     //     .then((res) => res.json())
        
    // }
}