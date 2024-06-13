// create-controller.js

const fs = require('fs');
const path = require('path');

// Read user input from command line arguments
const [,, userInput] = process.argv;

if (!userInput) {
  console.error('Please provide a filename.');
  process.exit(1);
}

// Define the directory and file path
const rootDir = path.join(__dirname, '..', '..');
const dirPath = path.join(rootDir, 'src', 'rest-resources', 'routes', 'api','v1');
const filePath = path.join(dirPath, `${userInput}.routes.js`);

// Ensure the directory exists
fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error(`Error creating directory: ${err.message}`);
    process.exit(1);
  }

  // Create the file with a basic template
  const fileContent = `
  import express from 'express'

  const ${userInput}Router = express.Router()

  ${userInput}.route('/')
  .get()
  .post()
  .put()
  .delete()

  export default ${userInput}Router
  `;

  fs.writeFile(filePath, fileContent.trim(), (err) => {
    if (err) {
      console.error(`Error creating file: ${err.message}`);
      process.exit(1);
    }

    console.log(`Controller file created at: ${filePath}`);
  });
});

// Helper function to capitalize the first letter of the input
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
