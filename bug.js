const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Instead of just sending 404, it should send a proper error message
    res.sendStatus(404); 
  } else {
    res.json(user);
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});