import conn from './connection.js'

export async function getAllBlogs() {
    try {
        const [rows] = await conn.query('SELECT * FROM blogs')
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function createBlog(title, content) {
    try {
        const [result] = await conn.query(`INSERT INTO blogs (title, content) VALUES ('${title}', '${content}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}


export async function deleteBlog(id) {
    try {
        const [result] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}