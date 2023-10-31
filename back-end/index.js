const express = require("express");
const cors = require("cors");
const axios = require('axios'); // Import the axios library

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username: username,
        secret: username,
        first_name: username
      },
      {
        headers: { "private-key": "16824e04-8943-45c3-aac2-0e96c0e78fd1" }
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
