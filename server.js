import express from 'express';
import knex from 'knex';
import config from './db-config.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const db = knex(config);

app.use(express.json());

// Example endpoint to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await db('users').select('*');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Example endpoint to create a new user
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const [id] = await db('users').insert({ name, email });
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Example endpoint to get a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db('users').where({ id }).first();
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});