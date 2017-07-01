import { take } from 'redux-saga/effects';

export default function* root() {
    const { store } = yield take('APP_INIT');
};
