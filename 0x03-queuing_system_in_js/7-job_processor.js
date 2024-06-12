#!/usr/bin/yarn dev
// Shebang indicating the script should be executed using Yarn

import { createQueue, Job } from 'kue';
// Importing the createQueue and Job from the 'kue' package

// Array of blacklisted phone numbers
const BLACKLISTED_NUMBERS = ['4153518780', '4153518781'];

// Creating a queue instance
const queue = createQueue();

/**
 * Sends a push notification to a user.
 * @param {String} phoneNumber - The phone number to send the notification to.
 * @param {String} message - The message content of the notification.
 * @param {Job} job - The job object associated with the notification.
 * @param {*} done - Callback function to be called when the notification is sent.
 */
const sendNotification = (phoneNumber, message, job, done) => {
  let total = 2, pending = 2; // Total number of notifications to send and pending notifications
  let sendInterval = setInterval(() => { // Interval function to simulate sending notifications
    if (total - pending <= total / 2) {
      job.progress(total - pending, total); // Update job progress
    }
    if (BLACKLISTED_NUMBERS.includes(phoneNumber)) { // Check if phone number is blacklisted
      done(new Error(`Phone number ${phoneNumber} is blacklisted`)); // Abort with error
      clearInterval(sendInterval); // Stop interval
      return;
    }
    if (total === pending) { // If all notifications are sent
      console.log(
        `Sending notification to ${phoneNumber},`,
        `with message: ${message}`,
      ); // Log notification details
    }
    --pending || done(); // When all notifications are sent, call 'done'
    pending || clearInterval(sendInterval); // Clear interval if all notifications are sent
  }, 1000); // Interval set to 1 second
};

// Process jobs of type 'push_notification_code_2' with concurrency 2
queue.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done); // Call sendNotification function
});
