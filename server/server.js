const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const corsOptions = {
    origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/api/products", (req, res) => {
    const dataPath = path.join(__dirname, "api", "products.json");
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error while reading file:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(8080, () => {
    console.log("Server started, port: 8080")
});