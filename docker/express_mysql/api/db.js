import conn from './connection.js'

export async function getAllMessages() {
    try {
        const [rows] = await conn.query('SELECT * FROM chats')
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function createMessage(username, message) {
    try {
        const [result] = await conn.query(`INSERT INTO chats (username, content) VALUES ('${username}', '${message}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function createDatabase() {
    try {
        const [result] = await conn.query(`CREATE TABLE IF NOT EXISTS chats (
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