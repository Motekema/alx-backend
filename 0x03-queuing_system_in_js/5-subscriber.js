#!/usr/bin/yarn dev
// This script is intended to be executed with Yarn package manager

import { createClient } from 'redis';
// Importing the createClient function from the 'redis' package

const client = createClient();
// Creating a Redis client instance

const EXIT_MSG = 'KILL_SERVER';
// Constant representing the message that triggers client shutdown

// Error handling: Log any errors that occur during connection
client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

// Connection handling: Log a message when the client successfully connects
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Subscribe to the 'holberton school channel' Redis channel
client.subscribe('holberton school channel');

// Message handling: Listen for incoming messages
client.on('message', (_err, msg) => {
  console.log(msg); // Log the received message
  
  // If the received message matches the EXIT_MSG, perform cleanup actions
  if (msg === EXIT_MSG) {
    client.unsubscribe(); // Unsubscribe from the channel
    client.quit(); // Quit the client
  }
});
