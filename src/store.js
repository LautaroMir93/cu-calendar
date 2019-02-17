import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from 'modules/app/reducers'

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
}