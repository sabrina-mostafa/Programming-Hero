import bcrypt from 'bcryptjs';
import { pool } from "../../config/db"
import jwt from 'jsonwebtoken';
import config from '../../config';


const loginUser = async (email: string, password: string) => {

    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

    if (result.rows.length === 0) {    // if email is found then rows length will be greater than 0
        return null;
    }

    const user = result.rows[0];

    const matchPassword = await bcrypt.compare(password, user.password);   // checks if the pass given in the payload and the pass of DB matches

    if (!matchPassword) {
        return false;
    }

    const secret = config.jwtSecret;

    // jwt.sign(payload, secret, tokenExpiringDueTime)
    const token = jwt.sign({ name: user.name, role: user.role, email: user.email }, secret as string, { expiresIn: "7d" });
    console.log({ token });

    return { token, user };
}

export const authServices = {
    loginUser,
}