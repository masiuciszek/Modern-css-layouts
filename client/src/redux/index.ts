/* eslint-disable import/extensions */
import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
  const logger = createLogger();
  const middleWares: Middleware[] = [];

  if (process.env.NODE_ENV === 'production') {
    middleWares.push(thunk, logger);
  }
  if (process.env.NODE_ENV === 'test') {
    middleWares.push(thunk, logger);
  }
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(thunk);
  }

  const middlewareEnhancer = applyMiddleware(...middleWares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );
  return store;
};


export default configureStore;
