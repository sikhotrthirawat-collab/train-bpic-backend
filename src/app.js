import express from "express";
import cors from "cors";
// import userRouter from './routes/user.route.js';
import userRouter from './routes/user.route.js'

const app = express();
app.use(cors());

// app.get("/users", (req, res) => {
//   res.send("Hello");
// });

app.use("/users", userRouter);

export default app;   
