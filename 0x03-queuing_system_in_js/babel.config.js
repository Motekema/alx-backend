module.exports = {
  presets: [
    [
      '@babel/preset-env', // Use the '@babel/preset-env' preset to automatically determine the Babel plugins needed based on the environment
      {
        targets: {
          node: 'current', // Target the current version of Node.js
        },
      },
    ],
  ],
};

