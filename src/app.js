import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'assets')))

app.listen(PORT, () => console.log('Server Running'))