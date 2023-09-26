import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

const initialState = {
  data: {},
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  dataReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
