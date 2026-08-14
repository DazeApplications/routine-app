// Firebase project config for account sign-in and cross-device sync.
//
// This file is safe to commit — these values identify your Firebase project,
// they are not secret. Access to your data is controlled by Firestore security
// rules (see firestore.rules), not by hiding this config.
//
// To fill this in:
//   1. Go to https://console.firebase.google.com and create a project.
//   2. Project settings (gear icon) > General > "Your apps" > Add app > Web (</>).
//      Register the app (no need for Firebase Hosting) and copy the config
//      object it gives you into FIREBASE_CONFIG below.
//   3. Build > Authentication > Get started > enable the "Google" sign-in provider.
//   4. Build > Firestore Database > Create database (start in production mode),
//      then paste the rules from firestore.rules into the Rules tab and Publish.
//   5. Authentication > Settings > Authorized domains > add the domain the app
//      is served from (e.g. dazeapplications.github.io).
//   6. https://console.cloud.google.com/apis/credentials (same project) >
//      open the "Web client" OAuth client Firebase created in step 3 >
//      Authorized JavaScript origins > add "https://<your-domain>" (exact
//      origin, e.g. https://dazeapplications.github.io, no trailing slash).
//      This is separate from step 5 and easy to miss — without it, Google
//      sign-in fails with no visible error.
//
// Until this is filled in with real values, sync stays hidden in Settings and
// the app works exactly as before, storing data on-device only.

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyDYze1HeL9YtSJR1pKTQYZne1eelLaZnFE",
  authDomain: "routine-apps.firebaseapp.com",
  projectId: "routine-apps",
  storageBucket: "routine-apps.firebasestorage.app",
  messagingSenderId: "373513178553",
  appId: "1:373513178553:web:ed543d0cd0a4ebba92ba68"
};

// Web client ID from Authentication > Sign-in method > Google > Web SDK
// configuration. Used for a direct FedCM-based Google sign-in, which avoids
// the cross-domain redirect hop that Chrome's third-party storage blocking
// can silently break.
var GOOGLE_CLIENT_ID = "373513178553-0jgu3kjcvt5rkia8q556fg3gq245jt0e.apps.googleusercontent.com";
