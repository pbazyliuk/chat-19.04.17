import React, {Component} from 'react';
import Chat from './containers/chat';
import Loader from './containers/Loader';
import Login from './containers/Login';
import WS from './containers/websocket';

class MainComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Chat />
                <Loader />
                <Login />
                <WS />
            </div>
        );
    }
}

export default MainComponent;

