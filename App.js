/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { fetchURLData } from "./actions/index";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SplashScreen from "./Screens/SplashScreen";
import HomeScreen from "./Screens/HomeScreen";
import allReducers from "./reducers";

const store = createStore(allReducers, applyMiddleware(thunk));
store.dispatch(fetchURLData());
const App = () => (
  <Provider store={store}>
    <WelcomeScreen />
  </Provider>
);

export default App;
