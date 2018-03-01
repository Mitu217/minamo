import {takeEvery} from 'redux-saga';
import {call, Effect} from 'redux-saga/effects';
import { resolve } from 'dns';

const info = ():Promise<void> => {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            console.log('hello!!');
            resolve();
        }, 1000);
    });
}

function* infoSaga(action: ): Iterable<Effect> {
    yield call(info, );
}

function* saga(): Iterable<Effect> {
    yield takeEvery()
}