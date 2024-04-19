# Firebase Cloud Messaging Sender Test

## Getting Started

1. Open Project and go to **Project settings > Service Accounts** and click **Generate New Private Key** button.
2. Save the JSON as service-account.json
3. Copy public key and in the `config.ts` file replace `<YOUR_PUBLIC_VAPID_KEY_HERE>` with your key.
4. Run `make install` to install dependencies.

To send a notification:

1. Run `make noise` and enter the token or topic.
