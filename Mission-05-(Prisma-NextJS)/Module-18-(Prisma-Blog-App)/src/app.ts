import express from "express"
import { postRoutes } from "./modules/post/post.routes";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';
import { commentRoutes } from "./modules/comment/comment.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";


const app = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000",  // client side url
    credentials: true   // to allow cookies to be sent
}))

app.use(express.json());


app.all('/api/auth/{*any}', toNodeHandler(auth));
// app.all('/api/auth/*splat', toNodeHandler(auth));    // works same as the previous line 


app.use("/posts", postRoutes);      // post routes

app.use("/comments", commentRoutes);   // comment routes


app.get("/", (req, res) => {
    res.send("Hello from Sabrina!");
});


// in case any request is given on any invalid route
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);



export default app;