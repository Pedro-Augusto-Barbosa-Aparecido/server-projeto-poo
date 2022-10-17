import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import colors from "colors";
import routes from "./routes";

dotenv.config();
colors.enable();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`.underline.red));
