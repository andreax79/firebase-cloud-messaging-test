// Import the necessary modules
const admin = require('firebase-admin');
const readline = require('node:readline');

// Init
process.env.GOOGLE_APPLICATION_CREDENTIALS = 'service-account.json';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

// Get token
async function getToken() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return await new Promise((resolve, reject) => {
        rl.question("Device token or topic: ", (input) => { rl.close(); resolve(input); } );
    });
}

// Create a function to send a notification
async function sendNotification() {
    const token = await getToken();
    if (token != "") {
        const message = {
            notification: {
                title: 'Sample Notification',
                body: 'This is a sample notification from your JavaScript script!',
            },
            token: token
        };

        try {
            const response = await admin.messaging().send(message);
            console.log('Notification sent successfully:', response);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }
}

// Call the function to send the notification
sendNotification();
