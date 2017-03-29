import {EventEmitter} from 'events';
import axios from '../default.axios';

class OperationsStore extends EventEmitter {
    constructor() {
        super();
        this.isNew = true;
        this.actions = [];
    }

    getAll() {
        if (this.isNew) {
            this.fetchAll();
        }
        return this.actions;
    }

    fetchAll() {
        const self = this;
        axios.get('operation')
            .then(function (response) {
                if (response.status === 200) {
                    self.actions = response.data;
                    self.isNew = false;
                    self.emit("change");
                } else if (response.status === 204) {
                    self.actions = {};
                }
            })
            .catch(function (error) {
                if (error.response) {

                } else {
                    console.error("Operations fetching error: ", error.message);
                }
                console.log(error.config);
            })
    }
}

const operationStore = new OperationsStore();
export default operationStore;