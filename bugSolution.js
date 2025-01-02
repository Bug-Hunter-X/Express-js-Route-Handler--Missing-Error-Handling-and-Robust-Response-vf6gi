const express = require('express');
const app = express();

// Sample user data (replace with your data source)
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Input validation: Check if userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID. ID must be a number.' });
  }

  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  } else {
    res.json(user);
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});