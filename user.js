const express = require('express');
const router = express.Router();

const users = [{ id: 1, name: 'Issufo' }];

// GET /users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// POST /users
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
