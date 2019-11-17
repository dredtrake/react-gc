import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import * as serviceWorker from './serviceWorker';

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware);
const composedEnhancers = compose(
  middlewareEnhancer,
  monitorReducerEnhancer,
);
const store = createStore(reducer, undefined, composedEnhancers);

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppContainer.propTypes = {
    store: PropTypes.object.isRequired,
};

serviceWorker.unregister();

export default AppContainer;
