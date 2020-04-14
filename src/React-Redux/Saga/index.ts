import { all } from "redux-saga/effects";
import { watchAcceptPendingRequestsSaga } from "./accept-requested-schools-saga";
import { watchRejectPendingRequestsSaga } from "./rejected-requested-schools-saga";
import { watchGetPendingRequestsSaga } from "./pending-requested-schools-saga";

export default function* rootSaga() {
    yield all([
        watchAcceptPendingRequestsSaga(),
        watchRejectPendingRequestsSaga(),
        watchGetPendingRequestsSaga()
    ]);
}
