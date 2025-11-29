import { pool } from '../config/db.js';

export const UserModel = {
    async findAll() {
        const result = await pool.query('SELECT id, name, email FROM users ORDER BY id DESC');
        return result.rows;
    },
}; 