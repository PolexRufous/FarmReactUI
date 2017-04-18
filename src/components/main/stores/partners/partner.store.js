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
                        self.emit("change");
                    }
                })
                .catch(function (error) {
                    if(error.response) {

                    } else {
                        console.error("Partner fetching error: ", error.message);
                    }
                    console.log(error.message);
                });
    }

    updatePartner(partner) {
        const self = this;
        if (partner) {
            this.partner = partner;
            axios.put('partner/', partner)
                .then(function (response) {
                    if(response.status === 200) {
                        self.emit("change");
                    }
                })
                .catch(function (error) {
                if(error.response) {

                } else {
                    console.error("Partner update error: ", error.message);
                }
                console.log(error.message);
            });
        }
    }
}

const partnerStore = new PartnerStore();
export default partnerStore;