import path from 'path';
import express, { NextFunction, Request, response, Response } from 'express';
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = 5000;

const pool = new Pool({
    connectionString: `${process.env.CONNECTION_SRT}`
});

// -------------------- DB initialization --------------------
const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)

    await pool.query(`
        CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
};
initDB();


// parser
app.use(express.json());  // middleware for json data
// app.use(express.urlencoded());  // middleware for form data



// logger middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`\n[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
    next();
}

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello Sabrina!')
    console.log("This will print after logger middleware");
})

// --------------------------------- users CRUD ---------------------------------
// create users
app.post('/users', async (req: Request, res: Response) => {
    // console.log(req.body);

    const { name, email } = req.body;

    try {
        const result = await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);
        // console.log(result.rows[0]);

        res.status(201).json({
            success: true,
            message: "Data inserted successfully",
            data: result.rows[0]
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// get all users
app.get("/users", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM users");

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            detailedError: err
        })
    }
});

// get users by id
app.get("/users/:id", async (req: Request, res: Response) => {
    // console.log(req.params.id);

    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        // console.log(result.rows);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                data: result.rows[0]
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// update user by id
app.put("/users/:id", async (req: Request, res: Response) => {
    // console.log(req.params.id);
    const { name, email } = await req.body;

    try {
        const result = await pool.query("UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *", [name, email, req.params.id]);
        // console.log(result.rows);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result.rows[0]
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// delete user by id
app.delete("/users/:id", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("DELETE FROM users WHERE id=$1", [req.params.id]);
        console.log(result);

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User deleted successfully",
                data: result.rows
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})


// --------------------------------- todos CRUD ---------------------------------
// create todos
app.post("/todos", async (req: Request, res: Response) => {
    const { user_id, title } = req.body;

    try {
        const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id, title]);
        console.log(result);

        res.status(200).json({
            success: true,
            message: "Todo created successfully",
            data: result.rows[0]
        })


    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// get all todos
app.get("/todos", async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM todos`);
        res.status(200).json({
            success: true,
            message: "todos retrieved successfully",
            data: result.rows
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// get single todo by id
app.get("/todos/:id", async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [req.params.id]);
        // console.log(result.rows);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todo fetched successfully",
                data: result.rows[0]
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// update todos by id
app.put("/todos/:id", async (req: Request, res: Response) => {
    const { title } = await req.body;
    try {
        const result = await pool.query(`UPDATE todos SET title=$1 WHERE id=$2 RETURNING *`, [title, req.params.id]);
        // console.log(result.rows);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todo updated successfully",
                data: result.rows[0]
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// delete todos bu id
app.delete("/todos/:id", async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [req.params.id]);

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todo deleted successfully",
                data: result.rows
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


// testing non-existing routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
