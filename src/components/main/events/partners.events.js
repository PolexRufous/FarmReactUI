import partnersDispatcher from '../dispatchers/partners.dispatcher';

export function createPartner(partner) {
    const partnerAction = {
        type: 'CREATE',
        partner,
    };
    partnersDispatcher.dispatch(partnerAction);
}

export function refreshPartners() {
    const partnerAction = {
        type: 'REFRESH',
    };
    partnersDispatcher.dispatch(partnerAction);
}