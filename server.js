const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));
app.get("/health", (_, res) => res.json({ ok: true, app: "DSNPFX Digit Intelligence" }));

app.listen(PORT, () => console.log("DSNPFX Digit Intelligence listening on " + PORT));