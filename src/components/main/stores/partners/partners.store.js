import { EventEmitter } from 'events';
import axios from '../default.axios';

class PartnersStore extends EventEmitter{
    constructor(){
        super();
        this.isNew = true;
        this.partners = [];
    }

    getAll(){
        if (this.isNew){
            this.fetchAll();
        }
        return this.partners;
    }

    fetchAll(){
        const self = this;
        axios.get('partner')
                .then(function (response) {
                    if(response.status === 200) {
                        self.partners = response.data;
                        self.isNew = false;
                        self.emit("change");
                    } else if (response.status === 204) {
                        self.partners = {};
                    }
                })
                .catch(function (error) {
                    if(error.response) {

                    } else {
                        console.error("Partners fetching error: ", error.message);
                    }
                    console.log(error.config);
                })
    }
}

const partnersStore = new PartnersStore();
export default partnersStore;