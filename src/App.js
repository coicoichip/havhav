import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compose, applyMiddleware, createStore } from 'redux';
import { Root } from "native-base";
import rootReducer from './reducers/index';
import { Start } from './navigation/appRouter';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return (
            <Root>
                <Provider store={store}>
                    <Start />
                </Provider>
            </Root>

        );
    }
}
export default App;