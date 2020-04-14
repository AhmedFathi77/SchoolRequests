import { union } from "ts-action";
import { call, put, takeLatest  } from "redux-saga/effects";
import { rejectRequestedSchoolsSucceeded, rejectRequestedSchoolsFailed } from "../Actions/reject-requested-shool-action";
import { rejectRequestedSchools } from "../Actions/reject-requested-shool-action";
import { rejectRequestedSchoolsAction } from "../Actions";
import { rejectPendingRequestsAPI } from "../../Axios/reject-pending-requests";

const actionType = union(rejectRequestedSchools);

function* RejectPendingRequestsSaga(action: typeof actionType.actions) {
    try {
        const res = yield call(rejectPendingRequestsAPI, action.payload.id ,  action.payload.data);
        yield put(rejectRequestedSchoolsSucceeded(res.data));
    } catch (e) {
        yield put(rejectRequestedSchoolsFailed(e));
    } 
}

export function* watchRejectPendingRequestsSaga() {
    yield takeLatest(rejectRequestedSchoolsAction.requested, RejectPendingRequestsSaga);
}
