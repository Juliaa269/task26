export default class GalleryPhotosView {
    constructor(config){
        console.log('GalleryPhotosView created');
        this.config = config;
        this.$el = this.initView()
    }

    initView() {
        return $(`<div id="photos" class="photos"></div>`)
    }

    render(photos) {
        this.$el.html(photos.map(this.getPhotosTemplate).join('\n'))
    }

    getPhotosTemplate(photoItem){
        return `<img class="photo-item" src="${photoItem.url}" alt="${photoItem.title}"/>`
    }
}