const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const { json } = require("express");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, fisrt_name: username },
      { headers: { "private-key": "c3ec1edb-d6f2-466c-b439-6b7f1cafaf16" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status), json(e.response.data);
  }
});

app.listen(3001);
