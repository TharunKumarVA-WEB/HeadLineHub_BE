const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

// Read news from JSON file
app.get("/api/news", (req, res) => {
  fs.readFile("src/data.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });
    res.json(JSON.parse(data));
  });
});


app.get("/api/news/tamil", (req, res) => {
  fs.readFile("src/tamil.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });
    res.json(JSON.parse(data));
  });
});

app.get("/api/news/kannada", (req, res) => {
  fs.readFile("src/kannada.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });
    res.json(JSON.parse(data));
  });
});

app.get("/api/news/telugu", (req, res) => {
  fs.readFile("src/telugu.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading data" });
    res.json(JSON.parse(data));
  });
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
