const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello ae Việt Nam!",
    time: new Date().toLocaleString("vi-VN"),
  });
});

app.listen(PORT, () => {
  console.log(`Server chạy port ${PORT}`);
});

module.exports = app;
