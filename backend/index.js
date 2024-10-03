import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.rout.js";
import companyRoute from "./routes/company.rout.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/applicatio.rout.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
    origin: '*',  
    credentials: true  // Allow cookies or authorization headers to be sent
}));


app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  connectDB();
  console.log(`server running at port ${PORT}`);
});
