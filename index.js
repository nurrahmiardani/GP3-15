const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.url_db || 3000, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then((db) => {
console.log("tersambung ke db");
})
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", require("./userRoute/register"));
app.use("/quis", require("./quisRoute/quisAction"))
app.use("/artikel", require("./artikelRoute/artikelAction"))
app.use("/feedback", require("./feedbackRoute/feedbackAction"))
app.use("/psikolog", require("./psikologRoute/psikologAction"))
app.use("/layanan", require("./layananRoute/layanan"))
app.get("/", (req, res) => {
res.send("Hello World");
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});