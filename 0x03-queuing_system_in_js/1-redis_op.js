#!/usr/bin/yarn dev
import { createClient, print } from 'redis';

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

/**
 * Sets a new value in the Redis store.
 * @param {string} schoolName - The key under which the value is stored.
 * @param {string} value - The value to store.
 */
const setNewSchool = (schoolName, value) => {
  client.SET(schoolName, value, print);
};

/**
 * Retrieves and logs the value of the given key from the Redis store.
 * @param {string} schoolName - The key whose value is to be retrieved.
 */
const displaySchoolValue = (schoolName) => {
  client.GET(schoolName, (_err, reply) => {
    console.log(reply);
  });
};

// Display the value of 'Holberton' key
displaySchoolValue('Holberton');

// Set a new value for 'HolbertonSanFrancisco' key
setNewSchool('HolbertonSanFrancisco', '100');

// Display the value of 'HolbertonSanFrancisco' key
displaySchoolValue('HolbertonSanFrancisco');
