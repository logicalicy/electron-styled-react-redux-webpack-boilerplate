import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeMessageLanguage } from 'actions/message';
import MessageComponent from 'components/message/MessageComponent';

const messages = {
    en: 'Hello world!',
    jp: 'こんにちは!',
    es: 'Hola mundo!',
    de: 'Hallo Welt!',
};

const mapStateToProps = (state) => {
    return {
        message: messages[state.message.language]
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeMessageLanguage: bindActionCreators(changeMessageLanguage, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);
