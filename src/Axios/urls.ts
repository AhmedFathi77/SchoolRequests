
export const GetPendingRequestsURL = 'http://[::1]:3000/pending-requests-models';
export const AcceptPendingRequestsURL = (id:number) => `http://[::1]:3000/pending-requests-models/${id}`;
export const RejectedPendingRequestsURL = (id:number) => `http://[::1]:3000/pending-requests-models/${id}`;

