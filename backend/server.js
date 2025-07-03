import express from "express";

const App = express();
const PORT = process.env.PORT || 3000;

App.use(express.json());

App.get("/", (req, res) => {
  res.send("Server is running");
});

App.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
