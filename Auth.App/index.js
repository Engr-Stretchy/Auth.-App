// index.js

const express = require("express");
const basicAuth = require("./auth"); // Import the auth middleware

const app = express();
app.use(express.json());

// In-memory storage for memories
const memories = [];

// Middleware to check authentication (applied to all routes)
app.use(basicAuth);

// Create a new memory
app.post("/memories", (req, res) => {
  const { id, content } = req.body;
  if (!id || !content) {
    res.status(400).send("Both id and content are required.");
    return;
  }

  memories.push({ id, content });
  res.status(201).send("Memory created successfully.");
});

// Get all memories
app.get("/memories", (req, res) => {
  res.json(memories);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
