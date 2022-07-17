const { Pool } = require('pg');

const pool = new Pool({
    user: 'cjtitjao',
    host: 'heffalump.db.elephantsql.co',
    password: '1cnvnqrQehVC2IEEclpDBzIGUUEniGPG',
    database: 'cjtitjao',
});

const getUsers = async (require, response) => {
    const res = await pool.query('SELECT * FROM Usuarios');
    res.json(response.rows);
};

module.exports = {
    getUsers
}