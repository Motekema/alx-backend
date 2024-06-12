#!/usr/bin/yarn dev
import { createClient, print } from 'redis';

// Create a new Redis client
const client = createClient();

// Event listener for errors
client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

/**
 * Updates a hash in the Redis store with a new field and value.
 * @param {string} hashName - The name of the hash.
 * @param {string} fieldName - The field name within the hash.
 * @param {string|number} fieldValue - The value to set for the field.
 */
const updateHash = (hashName, fieldName, fieldValue) => {
  client.HSET(hashName, fieldName, fieldValue, print);
};

/**
 * Retrieves and logs all fields and values of the specified hash from the Redis store.
 * @param {string} hashName - The name of the hash.
 */
const printHash = (hashName) => {
  client.HGETALL(hashName, (_err, reply) => console.log(reply));
};

/**
 * Main function to demonstrate setting and getting hash values in Redis.
 */
function main() {
  const hashObj = {
    Portland: 50,
    Seattle: 80,
    'New York': 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2,
  };
  for (const [field, value] of Object.entries(hashObj)) {
    updateHash('HolbertonSchools', field, value);
  }
  printHash('HolbertonSchools');
}

// Event listener for successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
  main(); // Execute the main function after a successful connection
});
