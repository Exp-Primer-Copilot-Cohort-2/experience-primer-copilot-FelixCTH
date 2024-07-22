// Create web server to handle comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse the body of the request
app.use(bodyParser.json());

// Initialize comments object
const comments = {
  // 1: ['First comment', 'Second comment'],
  // 2: ['Another comment', 'One more comment']
};

// Get comments for a specific post
app.get('/posts/:id/comments', (req, res) => {
  res.send(comments[req.params.id] || []);
});

// Add a comment to a post
app.post('/posts/:id/comments', (req, res) => {
  const { content } = req.body;
  const postComments = comments[req.params.id] || [];
  postComments.push(content);
  comments[req.params.id] = postComments;

  res.status(201).send(postComments);
});

app.listen(port, () => {
  console.log(`Comments service listening on port ${port}`);
});
