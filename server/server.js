const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({test: ["1", "2", "3"] });
});

app.listen(8080, () => {
    console.log("Server started, port: 8080")
});