import {EventEmitter} from 'events';
import axios from '../default.axios';

class OperationsStore extends EventEmitter {
    constructor() {
        super();
        this.isNew = true;
        this.operations = [];
        this.partnerId = null;
    }

    getByPartnerId(partnerId) {
        if (this.isNew || partnerId !== this.partnerId) {
            this.partnerId = partnerId;
            this.isNew = false;
            this.fetchAll("operation/partner/" + partnerId);
        }
        return this.operations;
    }

    fetchAll(path) {
        const self = this;
        axios.get(path)
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.constructor === Array) {
                    self.operations = response.data;
                    }
                    self.isNew = false;
                    self.emit("change");
                } else if (response.status === 204) {
                    self.operations = [];
                    self.emit("change");
                }
            })
            .catch(function (error) {
                if (error.response) {

                } else {
                    console.error("Operations fetching error: ", error.message);
                }
                console.log(error.message);
            })
    }
}

const operationStore = new OperationsStore();
export default operationStore;