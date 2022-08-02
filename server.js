const express = require("express");
const app = express();
const PORT = 8000;

// setup express

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
