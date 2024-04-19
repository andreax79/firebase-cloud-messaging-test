# Firebase Cloud Messaging Quickstart

The Firebase Cloud Messaging quickstart demonstrates how to:

- Request permission to send app notifications to the user.
- Receive FCM messages using the Firebase Cloud Messaging JavaScript SDK.

## Introduction

[Read more about Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/)

## Getting Started

1. Create your project in the Firebase Console by following [**Step 1: Create a Firebase Project**](https://firebase.google.com/docs/web/setup/#create-firebase-project)
2. Register a web app by following [**Step 2: Register your app with Firebase**](https://firebase.google.com/docs/web/setup/#create-firebase-project).
   1. You don't need to add Hosting right now, and you can skip the "Add Firebase SDK" step in the console's "Add Firebase to your web app" flow.
   2. Remember to click "Register App" or "Continue to console" at the bottom of the "Add Firebase to your web app" flow.
   3. Copy your Firebase config object (from the "Add Firebase to your web app" dialog), and paste it in the `config.ts` file in the messaging directory.
3. Open Project and go to **Project settings > Cloud Messaging** and there in the **Web configuration** section click **Generate key pair** button.
4. Copy public key and in the `config.ts` file replace `<YOUR_PUBLIC_VAPID_KEY_HERE>` with your key.
5. Run `make install` to install dependencies. If you don't have [Firebase CLI](https://firebase.google.com/docs/cli/) installed, you have to configure it.

To run the sample app locally during development:

1. Run `make build` to build the app using Vite.
2. Run `make run-emulator` to start the local [Firebase emulators](https://firebase.google.com/docs/emulator-suite).
3. Navigate in your browser to the URL output by the `firebase emulators:start` command.
   By default, it will be [http://127.0.0.1:5000](http://127.0.0.1:5000) though it may be different for you.
4. Click **REQUEST PERMISSION** button to request permission for the app to send notifications to the browser.

To deploy the sample app to production:

1. Run `make deploy`.
   This will deploy the sample app to `https://<project_id>.firebaseapp.com`.

NOTE: If your payload has a `notification` object, `setBackgroundMessageHandler` will not trigger. Read [here](https://firebase.google.com/docs/cloud-messaging/js/receive) for more information.

### App focus

When the app has the browser focus, the received message is handled through
the `onMessage` callback in `index.html`. When the app does not have browser
focus then the `setBackgroundMessageHandler` callback in `firebase-messaging-sw.js`
is where the received message is handled.

The browser gives your app focus when both:

1. Your app is running in the currently selected browser tab.
2. The browser tab's window currently has focus, as defined by the operating system.

## License

© Google, 2016. Licensed under an [Apache-2](LICENSE) license.
