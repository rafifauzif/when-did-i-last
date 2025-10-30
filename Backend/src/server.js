const cors = require("cors")
const express = require("express");
const app = express();
require('dotenv').config();

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({status: 'OK', app: 'when-did-i-last'});
})
app.use("/api", require('./routes/taskRoutes'))
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
