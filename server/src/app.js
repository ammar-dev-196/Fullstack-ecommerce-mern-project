import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "16kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use(express.static("public"));

app.use(cookieParser());

// app.use(morgan("dev"));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/*
  Import routes.
*/

// import userRouter from "./routes/user.route.js";

// /*
//   Routes declaration.
// */

// // https://localhost:8000/api/v1/users/register
// app.use("/api/v1/users", userRouter);

export { app };
