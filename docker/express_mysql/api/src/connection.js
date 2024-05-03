import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    // host: 'localhost',
    host:'mysql',
    port: 3306,
    user: 'chat_user',
    database: 'chat_db',
    password: 'chat_password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool
