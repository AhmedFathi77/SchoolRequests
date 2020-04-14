import { union } from "ts-action";
import { call, put, takeLatest  } from "redux-saga/effects";
import { acceptRequestedSchoolsSucceeded, acceptRequestedSchoolsFailed } from "../Actions/accept-requested-school-action";
import { acceptRequestedSchools } from "../Actions/accept-requested-school-action";
import { acceptRequestedSchoolsAction } from "../Actions";
import { acceptPendingRequestsAPI } from "../../Axios/accept-pending-requests";

const actionType = union(acceptRequestedSchools);

function* acceptPendingRequestsSaga(action: typeof actionType.actions) {
    try {
        const res = yield call(acceptPendingRequestsAPI, action.payload.id , action.payload.data);
        yield put(acceptRequestedSchoolsSucceeded(res.data));
    } catch (e) {
        yield put(acceptRequestedSchoolsFailed(e));
    } 
}

export function* watchAcceptPendingRequestsSaga() {
    yield takeLatest(acceptRequestedSchoolsAction.requested, acceptPendingRequestsSaga);
}
