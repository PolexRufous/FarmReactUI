import {EventEmitter} from 'events';
import axios from '../default.axios';
import operationsDispatcher from '../../dispatchers/operations.dispatcher';

class OperationsStore extends EventEmitter {
    constructor() {
        super();
        this.isNew = true;
        this.operations = [];
    }

    getAll() {
        if (this.isNew) {
            this.fetchAll();
        }
        return this.operations;
    }

    fetchAll() {
        const self = this;
        axios.get('operation')
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

    createOperation(operation){ }

    updateOperation(operation) { }

    handleEvent(operationEvent){
        const { operation } = operationEvent;
        switch (operationEvent.type) {
            case 'REFRESH':
                this.fetchAll();
                break;
            case 'CREATE':
                this.createOperation(operation);
                break;
            case 'SAVE':
                this.savePartner(partner);
                break;
            case 'UPDATE':
                this.updateOperation(operation);
                break;
            default:
                console.error('Unexpected operation action type!');
        }

    }
}

const operationStore = new OperationsStore();
operationsDispatcher.register(operationStore.handleEvent.bind(operationStore));
export default operationStore;