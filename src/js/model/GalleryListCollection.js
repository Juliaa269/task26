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
}