const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

const auditionsRoutes = require("./routes/auditions");
app.use(cors());
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

app.use("/auditions", auditionsRoutes);
