import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./src/.env" });
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
