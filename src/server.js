import express from "express";
import "dotenv/config";
import cors from "cors";
import AuthRoutes from "../src/routes/auth.routes.js";
import BookRoutes from "../src/routes/book.routes.js";
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("Welcome to api");
    res.send("Welcome to api");
})

app.use("/api/auth", AuthRoutes)
app.use("/api/book", BookRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
})