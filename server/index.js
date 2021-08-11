const express = require("express");
const connectToDB = require("./db/index");
const cors = require("cors");
const PORT = 5002;
const todoRoutes = require("./routes/TodoRoutes");
const app = express();


connectToDB();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", todoRoutes);


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
