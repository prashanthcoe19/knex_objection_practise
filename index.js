const dbSetup = require("./database/setupDb");
const express = require("express");
const User = require("./database/models/user");
dbSetup();

const app = express();
app.use(express.json());

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Here is merge conflict");
    const user = await User.query().findById(id).withGraphFetched("channel");
    res.json(user);
  } catch (err) {
    console.error(err);
  }
});

app.listen(8080, () => console.log(`Server running in port 8080`));
