#!/usr/bin/yarn dev
// Shebang indicating the script should be executed using Yarn

import { createQueue } from 'kue';
// Importing the createQueue function from the 'kue' package

// Creating a queue instance
const queue = createQueue();

// Function to send a notification to a given phone number with a message
const sendNotification = (phoneNumber, message) => {
  console.log(
    `Sending notification to ${phoneNumber},`, // Logging the phone number
    'with message:', // Logging the message
    message,
  );
};

// Process jobs with the type 'push_notification_code' from the queue
queue.process('push_notification_code', (job, done) => {
  // Extracting data (phoneNumber and message) from the job and calling the sendNotification function
  sendNotification(job.data.phoneNumber, job.data.message);
  done(); // Callback to indicate that the job processing is done
});
