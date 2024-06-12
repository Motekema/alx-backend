#!/usr/bin/yarn dev
import { promisify } from 'util';
import { createClient, print } from 'redis';

// Create a new Redis client
const client = createClient();

// Event listener for errors
client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
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
const displaySchoolValue = async (schoolName) => {
  console.log(await promisify(client.GET).bind(client)(schoolName));
};

/**
 * Main function to demonstrate setting and getting values in Redis.
 */
async function main() {
  await displaySchoolValue('Holberton'); // Display the value of 'Holberton' key
  setNewSchool('HolbertonSanFrancisco', '100'); // Set a new value for 'HolbertonSanFrancisco' key
  await displaySchoolValue('HolbertonSanFrancisco'); // Display the value of 'HolbertonSanFrancisco' key
}

// Event listener for successful connection
client.on('connect', async () => {
  console.log('Redis client connected to the server');
  await main(); // Execute the main function after a successful connection
});
