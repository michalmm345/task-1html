const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post("/contact", (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    console.log("Full Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Subject:", subject);
    console.log("Message:", message);

    res.json({ message: "Data received successfully!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});