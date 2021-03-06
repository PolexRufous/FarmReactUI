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
        self.isNew = false;
        axios.get('partner')
                .then(function (response) {
                    if(response.status === 200) {
                        if (response.data.constructor === Array) {
                            self.partners = response.data;
                        }
                    } else if (response.status === 204) {
                        self.partners = [];
                    }
                    self.emit("change");
                    self.isNew = false;
                })
                .catch(function (error) {
                    if(!error.response) {
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

    getPrtnerById(id) {
        const partner = this.partners
                .filter((partner) => {
                    return partner.id == id;
                });
        return partner[0];

    }

    updatePartner(partner) {
        const self = this;
        axios.put('partner', partner)
            .then(function (response) {
                if(response.status === 200) {
                    self.fetchAll();
                } else {
                    console.error('Unexpected response status');
                }
            })
            .catch(function (error) {
                if(error.response) {
                    console.log(error.response);
                } else {
                    console.error("Partner updating error: ", error.message);
                }
                console.log(error.config);
            });
    }

    handleEvent(partnerEvent){
        const { partner } = partnerEvent;
        switch (partnerEvent.type) {
            case 'REFRESH':
                this.fetchAll();
                break;
            case 'CREATE':
                this.createPartner(partner);
                break;
            case 'SAVE':
                this.savePartner(partner);
                break;
            case 'UPDATE':
                this.updatePartner(partner);
                break;
            default:
                console.error('Unexpected partners action type!');
        }

    }
}

const partnersStore = new PartnersStore();
partnersDispatcher.register(partnersStore.handleEvent.bind(partnersStore));
export default partnersStore;