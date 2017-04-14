import { EventEmitter } from 'events';
import axios from '../default.axios';

class PartnerStore extends EventEmitter{
    constructor(){
        super();
        this.isNew = true;
        this.partner = {};
    }

    getById(id){
        if (this.isNew || id != this.partner.id){
            this.fetch(id);
        }
        return this.partner;
    }

    fetch(id){
        const self = this;
        axios.get('partner/' + id)
                .then(function (response) {
                    if(response.status === 200) {
                        self.partner = response.data;
                        self.isNew = false;
                        self.emit("change");
                    } else if (response.status === 204) {
                        self.partner = {};
                    }
                })
                .catch(function (error) {
                    if(error.response) {

                    } else {
                        console.error("Partners fetching error: ", error.message);
                    }
                    console.log(error.config);
                });
    }
}

const partnerStore = new PartnerStore();
export default partnerStore;