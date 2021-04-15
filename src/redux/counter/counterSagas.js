import * as types from './counterTypes';
import { takeLatest, put, call, fork, all, delay} from "redux-saga/effects";

export function* incrementCounterSaga(action) {
    try {
        yield call(delay, 500);
        yield put({
            type: types.INCREMENT_COUNTER,
            payload: action.payload
        });

    } catch (response) {}
}

function* watchIncrementCounter() {
    yield takeLatest(types.INCREMENT_COUNTER, incrementCounterSaga);
}

export function* decrementCounterSaga(action) {
    try {
        yield call(delay, 500);
        yield put({
            type: types.DECREMENT_COUNTER,
            payload: action.payload
        });
    } catch (response) {}
}

function* watchDecrementCounter() {
    yield takeLatest(types.DECREMENT_COUNTER, decrementCounterSaga);
}


// ------------ Watch Counter Sagas ---------------
export default function* watchCounter() {
    yield all([fork(watchIncrementCounter)]);
    yield all([fork(watchDecrementCounter)]);
}