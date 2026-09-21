const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 10000;


// ===============================
// HOME / HEALTH CHECK
// ===============================

app.get("/", (req, res) => {
    res.json({
        app: "CHIMA DATA",
        status: "online",
        message: "CHIMA DATA backend is running"
    });
});


// ===============================
// TEST ENDPOINT
// ===============================

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "CHIMA DATA API is working"
    });
});


// ===============================
// SERVER
// ===============================

app.listen(PORT, "0.0.0.0", () => {
    console.log(`CHIMA DATA server running on port ${PORT}`);
});
