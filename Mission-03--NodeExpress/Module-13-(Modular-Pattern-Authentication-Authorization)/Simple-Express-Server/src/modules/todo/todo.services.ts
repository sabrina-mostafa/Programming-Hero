import { pool } from "../../config/db";

// create todos
const createTodo = async (payload: Record<string, unknown>) => {
    const { user_id, title } = payload;
    
    const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id, title]);
    return result;
}

// get all todos
const getAllTodos = async () => {
    const result = await pool.query(`SELECT * FROM todos`);
    return result;
}

// get single todo by id
const getSingleTodo = async (id: string) => {
    const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [id]);
    return result;
}

// update todos by id
const updateTodo = async (title: string, id: string) => {
    const result = await pool.query(`UPDATE todos SET title=$1 WHERE id=$2 RETURNING *`, [title, id]);
    return result;
}

// delete todos by id
const deleteTodo = async (id: string) => {
    const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [id]);
    return result;
}


export const todoService = {
    createTodo,
    getAllTodos,
    getSingleTodo,
    updateTodo,
    deleteTodo
}