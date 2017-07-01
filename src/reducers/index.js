import { combineReducers } from 'redux';
import {
    CHANGE_MESSAGE_LANGUAGE
} from 'constants/message';

const MessageReducer = (state = { language: 'en' }, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
}

export default combineReducers({
    message: MessageReducer
});
