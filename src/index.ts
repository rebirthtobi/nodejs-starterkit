import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import userRoute from "./routes/userRoute";

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", userRoute);

app.get("/", (req, res) => res.status(200).json({ message: "Welcome to Node starter kit" }));
app.post("/", (req, res) => res.status(200).json({ message: "Welcome to Node starter kit" }));

const port = process.env.port || 5000;

module.exports = app.listen(port);
