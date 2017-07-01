import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
} from 'react-router-dom';
import MessageContainer from 'containers/message/MessageContainer';
import AboutComponent from 'components/about/AboutComponent';
import {
    AppOuter,
    AppLink
} from './style';

const AppComponent = () => (
    <AppOuter>
        <Router>
            <div>
                {window.location.pathname.includes('index.html') && <Redirect to="/" />}
                {window.location.pathname.includes('text/html,chromewebdata') && <Redirect to="/" />}
                <div>
                    <AppLink to="/" first>Home</AppLink>
                    <AppLink to="/about" last>About</AppLink>
                </div>
                <Route exact path="/" component={MessageContainer}/>
                <Route path="/about" component={AboutComponent}/>
            </div>
        </Router>
    </AppOuter>
);

export default AppComponent;
