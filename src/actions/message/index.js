import { createAction } from 'redux-actions';
import {
    CHANGE_MESSAGE_LANGUAGE
} from 'constants/message';

export const changeMessageLanguage = createAction(CHANGE_MESSAGE_LANGUAGE);
