#!/usr/bin/yarn dev

import { createClient } from 'redis';

// Create a new Redis client
const client = createClient();

// Event listener for errors
client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

// Event listener for successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});
