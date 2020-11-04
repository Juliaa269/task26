import GalleryListCollection from '../model/GalleryListCollection';
import GalleryPhotosCollection from '../model/GalleryPhotosCollections';
import GalleryListView from '../view/GalleryListView';
import GalleryPhotosView from '../view/GalleryPhotosView';



export default class GalleryController {
    constructor() {
        console.log('GalleryController created')
        this.$container = $('.gallery-box')

        this.listView = new GalleryListView({
            onToggle: (id) => this.onToggle(id)
        });
        this.photosView = new GalleryPhotosView();
        this.listCollection = new GalleryListCollection();
        this.photosCollection = new GalleryPhotosCollection();

        this.$container.append(this.listView.$el);
        this.$container.append(this.photosView.$el);

        this.listCollection.getList().then(() => {
            this.listView.render(this.listCollection.list);
        });

        this.photosCollection.getPhotos()
            .then(() => {
            this.photosView.render(this.photosCollection.photos)
            this.onToggle(this.listCollection.list[0].id);
        });
    }

    onToggle(id){
        this.photosCollection.getPhotos(id).then(() => {
            this.photosView.render(this.photosCollection.photos);
        });
        this.renderList()
    }

    renderList(){
        this.listCollection.getList().then(() => {
            this.listView.render(this.listCollection.list);
        });
    }
}