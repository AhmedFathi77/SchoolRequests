export const genericAction = (action:string) => ({
    fulfilled: `${action}_FULFILLED`,
    rejected: `${action}_REJECTED`,
    requested: `${action}_REQUESTED`
})

const GET_REQUESTED_SCHOOLS_ACTION = 'GET_REQUESTED_SCHOOLS_ACTION';
export const getRequestedSchoolsAction = genericAction(GET_REQUESTED_SCHOOLS_ACTION);

const ACCEPT_REQUESTED_SCHOOLS_ACTION = 'ACCEPT_REQUESTED_SCHOOLS_ACTION';
export const acceptRequestedSchoolsAction = genericAction(ACCEPT_REQUESTED_SCHOOLS_ACTION);

const REJECT_REQUESTED_SCHOOLS_ACTION = 'REJECT_REQUESTED_SCHOOLS_ACTION';
export const rejectRequestedSchoolsAction = genericAction(REJECT_REQUESTED_SCHOOLS_ACTION);
