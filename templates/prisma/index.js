import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req, res) => {
   res.json({
      message: "Hello World!👋",
   });
});

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

// PORT
const port = 3000;
app.listen(port, () =>
  console.log(`⦗INFO🔥⦘ Server running on http://localhost:${port}`)
);