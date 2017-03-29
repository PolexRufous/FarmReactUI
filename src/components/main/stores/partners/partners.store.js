import { EventEmitter } from 'events';
import axios from '../default.axios';
import partnersDispatcher from '../../dispatchers/partners.dispatcher';

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
                });
    }

    createPartner(partner) {
        const self = this;
        axios.post('partner', partner)
                .then(function (response) {
                    if(response.status === 200) {
                        self.partners.push(response.data);
                        self.emit("change");
                    } else {
                        console.error('Unexpected response status');
                    }
                })
                .catch(function (error) {
                    if(error.response) {
                        console.log(error.response);
                    } else {
                        console.error("Partners saving error: ", error.message);
                    }
                    console.log(error.config);
                });
    }



    handlePartnerEvent(partnerEvent){
        switch (partnerEvent.type) {
            case 'REFRESH_PARTNERS':
                this.fetchAll();
                break;
            case 'CREATE_PARTNER':
                this.createPartner(partnerEvent.partner);
                break;
            default:
                console.error('Unexpected partners action type!');
        }

    }
}

const partnersStore = new PartnersStore();
partnersDispatcher.register(partnersStore.handlePartnerEvent.bind(partnersStore));
export default partnersStore;