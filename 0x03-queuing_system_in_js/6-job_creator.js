#!/usr/bin/yarn dev
// Shebang indicating the script should be executed using Yarn

import { createQueue } from 'kue';
// Importing the createQueue function from the 'kue' package

// Creating a queue instance named 'push_notification_code'
const queue = createQueue({name: 'push_notification_code'});

// Creating a job to be added to the queue
const job = queue.create('push_notification_code', {
  phoneNumber: '4153518780', // Phone number to send the notification to
  message: 'Account registered', // Notification message
});

// Event listeners for the job
job
  .on('enqueue', () => {
    console.log('Notification job created:', job.id); // Log when the job is enqueued
  })
  .on('complete', () => {
    console.log('Notification job completed'); // Log when the job is completed successfully
  })
  .on('failed attempt', () => {
    console.log('Notification job failed'); // Log when the job fails
  });

// Save the job to the queue
job.save();
