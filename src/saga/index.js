import { takeEvery, put } from 'redux-saga/effects';
import * as action from '../action/actions';

function* testSaga(actions) {
    yield Promise.resolve('Hello from redux saga');
    yield put({ type: action.STOREVAL, value: actions.value })
}
export function* watchSaga() {
    yield takeEvery(action.TEST_SAGA, testSaga);
}