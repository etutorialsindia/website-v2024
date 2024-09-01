import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import pureIP from "express-pureip";
import routes from "./routes/index.js";


const port =process.env.port;

(async () => {
  const app = express();
  app
    .set("view-engine", "twig")
    .use(express.static("public"))
    .use([
      cors(),
      express.json(),
      express.urlencoded({
        extended: true,
      }),
      fileUpload(),
      pureIP,
      routes,
    ])

    .use((_, res) => {
      return res.render("index.twig", []);
      return res.status(401).json({
        status: "error",
        message: "Invalid request.",
      });
    })
    .listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
})();
