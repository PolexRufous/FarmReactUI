import {EventEmitter} from 'events';
import documentsDispatcher from '../../dispatchers/documents.dispatcher';
import axios from '../default.axios';

class DocumentsStore extends EventEmitter {
    constructor() {
        super();
        this.documents = [];
        this.getFiveRecent();
    }

    getStoredDocuments() {
        return this.documents;
    }

    getFiveRecent() {
        const self = this;
        axios.get('document/recent')
                .then(function (response) {
                    if (response.status === 200) {
                        self.documents = response.data.content;
                    } else if (response.status === 204) {
                        self.documents = [];
                    }
                    self.emit('change');
                })
                .catch(function (error) {
                    console.error("Operations fetching error: ", error.message);
                });
    }

    createDocument(document) {
        axios.post('document', document)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                })
    }

    handleEvent(documentsEvent) {
        const {document} = documentsEvent;
        switch (documentsEvent.type) {
            case 'RECENT':
                this.getFiveRecent();
                break;
            case 'CREATE':
                this.createDocument(document);
                break;
            default:
                console.error('Unexpected operation action type!');
        }
    }
}

const documentsStore = new DocumentsStore();
documentsDispatcher.register(documentsStore.handleEvent.bind(documentsStore));
export default documentsStore;