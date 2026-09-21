const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 10000;

// Home
app.get("/", (req, res) => {
    res.json({
        app: "CHIMA DATA",
        status: "online",
        message: "CHIMA DATA backend is running"
    });
});

// Test
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "CHIMA DATA API is working"
    });
});

// Get MTN data plans
app.get("/api/mtn-plans", async (req, res) => {
    try {

        const response = await fetch(
            "https://vtu.ng/wp-json/api/v2/variations/data?service_id=mtn"
        );

        if (!response.ok) {
            return res.status(502).json({
                success: false,
                message: "Could not connect to VTU.ng"
            });
        }

        const result = await response.json();

        res.json({
            success: true,
            provider: "VTU.ng",
            network: "MTN",
            plans: result.data || []
        });

    } catch (error) {

        console.error("MTN plans error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while getting MTN plans"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`CHIMA DATA server running on port ${PORT}`);
});
