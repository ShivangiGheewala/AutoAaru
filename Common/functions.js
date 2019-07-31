import firebase from "react-native-firebase";

export function getFirebaseConfiguration() {
  let config = {
    apiKey: "AIzaSyD6lNF2VIwKOHzsXGgWMSjNNh1UsU1UN9U",
    databaseURL: "https://autoaaru-5c4e6.firebaseio.com/",
    projectId: "autoaaru-5c4e6",
    appId: "1:755416491618:ios:f80687389902ad88",
    messagingSenderId: "755416491618",
    storageBucket: "gs://autoaaru-5c4e6.appspot.com"
  };
  return firebase.initializeApp(config);
}

// export function getFirebaseConfiguration() {
//   let config = {
//     apiKey: "AIzaSyAPLkMghNGBlaT6tM5wVmHzIYu7kiCj8lE",
//     authDomain: "gtgarage-abeea.firebaseapp.com",
//     databaseURL: "https://gtgarage-abeea.firebaseio.com",
//     projectId: "gtgarage-abeea",
//     storageBucket: "gtgarage-abeea.appspot.com",
//     messagingSenderId: "657971044117",
//     appId: "1:657971044117:web:3197aad208872f17"
//   };
//   let app = firebase.initializeApp(config);
//   return app.database();
// }
