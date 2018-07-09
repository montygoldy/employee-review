import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/rootSaga";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
