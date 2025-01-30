import dotenv from 'dotenv';
import knexfile from './knexfile.js';

// Load environment variables from .env file
dotenv.config();

// Get the environment (default to 'development' if not set)
const environment = process.env.NODE_ENV || 'development';

// Select the appropriate configuration
const config = knexfile[environment];

if (!config) {
    throw new Error(`No database configuration found for environment: ${environment}`);
}

export default config;