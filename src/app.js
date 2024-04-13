import express from "express";
import * as path from "path";
const __filename = import.meta.url;
const __dirname = path.dirname(new URL(__filename).pathname);

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'assets')))

app.listen(PORT, () => console.log('Server Running'))