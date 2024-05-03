import conn from './connection.js'

export async function getAllMessages() {
    try {
        const [rows] = await conn.query('SELECT * FROM blogs')
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function createMessage(username, message) {
    try {
        const [result] = await conn.query(`INSERT INTO blogs (username, content) VALUES ('${username}', '${message}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function createDatabase() {
    try {
        const [result] = await conn.query(`CREATE TABLE IF NOT EXISTS blogs (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            content TEXT NOT NULL
        );`)
        return result
    } catch (e) {
        console.log(e)
        return e
    }
}