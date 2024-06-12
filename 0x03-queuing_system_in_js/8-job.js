#!/usr/bin/yarn dev
// Shebang indicating the script should be executed using Yarn

import { Queue, Job } from 'kue';
// Importing the Queue and Job classes from the 'kue' package

/**
 * Creates push notification jobs from the array of job info.
 * @param {Job[]} jobs - Array containing job information.
 * @param {Queue} queue - The queue instance to create jobs in.
 */
export const createPushNotificationsJobs = (jobs, queue) => {
  // Check if 'jobs' is an array
  if (!(jobs instanceof Array)) {
    throw new Error('Jobs is not an array');
  }
  
  // Loop through each job info object in the 'jobs' array
  for (const jobInfo of jobs) {
    // Create a job for each job info object
    const job = queue.create('push_notification_code_3', jobInfo);

    // Event listeners for the job
    job
      .on('enqueue', () => {
        console.log('Notification job created:', job.id); // Log when the job is enqueued
      })
      .on('complete', () => {
        console.log('Notification job', job.id, 'completed'); // Log when the job is completed successfully
      })
      .on('failed', (err) => {
        console.log('Notification job', job.id, 'failed:', err.message || err.toString()); // Log when the job fails
      })
      .on('progress', (progress, _data) => {
        console.log('Notification job', job.id, `${progress}% complete`); // Log the progress of the job
      });

    job.save(); // Save the job to the queue
  }
};

// Exporting the createPushNotificationsJobs function
export default createPushNotificationsJobs;
