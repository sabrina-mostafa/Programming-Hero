import express, { Request, Response } from 'express';
import initDB from './config/db';
import logger from './middleware/logger';
import { userRoutes } from './modules/user/user.routes';
import { todoRoutes } from './modules/todo/todo.routes';
import { authRouters } from './modules/auth/auth.routers';


const app = express();

// parser
app.use(express.json());  // middleware for json data
// app.use(express.urlencoded());  // middleware for form data


// Initialization DB
initDB();


// root router
app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello Sabrina!')
    console.log("This will print after logger middleware");
})



// --------------------------------- users CRUD ---------------------------------
// create users, get all users
app.use('/users', userRoutes);


// --------------------------------- todos CRUD ---------------------------------
// create todos
app.use("/todos", todoRoutes);


// --------------------------------- Auth ---------------------------------
// login 
app.use("/auth", authRouters);



// testing non-existing routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path
    })
})

export default app;