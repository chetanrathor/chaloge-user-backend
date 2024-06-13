// create-controller.js

const fs = require('fs');
const path = require('path');

// Read user input from command line arguments
const [, , userInput, serviceName] = process.argv;
console.log(process.argv)
if (!userInput || !serviceName) {
  console.error('Please provide a filename.');
  process.exit(1);
}

// Define the directory and file path
const rootDir = path.join(__dirname, '..', '..');
const dirPath = path.join(rootDir, 'src', 'services', userInput);
const filePath = path.join(dirPath, `${serviceName}.service.js`);

// Ensure the directory exists
fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error(`Error creating directory: ${err.message}`);
    process.exit(1);
  }

  // Create the file with a basic template
  const fileContent = `
  import ServiceBase from '../../libs/serviceBase'
import ajv from '../../libs/ajv'

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
}

const constraints = ajv.compile(schema)

export default class ${capitalizeFirstLetter(serviceName)}Service extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    return { message: 'Hello ' + this.args.name }
  }
}

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
function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
