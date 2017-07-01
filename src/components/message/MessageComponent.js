import React from 'react';

const MessageComponent = ({ message, changeMessageLanguage }) => {
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => changeMessageLanguage('en')}>English</button>
            <button onClick={() => changeMessageLanguage('jp')}>日本語</button>
            <button onClick={() => changeMessageLanguage('es')}>Español</button>
            <button onClick={() => changeMessageLanguage('de')}>Deutch</button>
        </div>
    );
};

export default MessageComponent;
