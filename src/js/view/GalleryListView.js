export default class GalleryListView {
    constructor(config){
        console.log('GalleryListView created');
        this.config = config;
        this.$el = this.initView()
    }

    initView() {
        return $(`<div id="albums" class="albums"></div>`)
                    .on('click', '.album-item', (e) => {
                        this.onAlbumItemClick(e);
                    })
    }

    render(list) {
        this.$el.html(list.map(this.getListTemplate).join('\n'))
    }

    getListTemplate(listItem){
        return `<div class="album-item" data-id="${listItem.id}">${listItem.title}</div>`
    }

    onAlbumItemClick(e){
        this.config.onToggle($(e.target).data('id'));
    }
}