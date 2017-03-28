import partnersDispatcher from '../dispatchers/partners.dispatcher';

export function createPartner(partner) {
    const partnerAction = {
        type: 'CREATE_PARTNER',
        partner,
    };
    partnersDispatcher.dispatch(partnerAction);
}

export function refreshPartners() {
    const partnerAction = {
        type: 'REFRESH_PARTNERS',
    };
    partnersDispatcher.dispatch(partnerAction);
}