import express from 'express'
// import cors from 'cors'
import { getAllBlogs, createBlog, deleteBlog } from './db.js'





const app = express()
const port = 3000

// This line is necessary to parse the request body
app.use(express.json())













// console.log('enable Cors');
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/blogs', async (req, res) => {
  const blogs = await getAllBlogs()
  res.json(blogs)
})

app.post('/blogs', async (req, res) => {
  const [title, content] = [req.body.title, req.body.content]
  console.log(title, content);
  const blogs = await createBlog(title, content)
  res.json(blogs)
})

app.delete('/blogs/:id', async(request, response)=>{
  console.log('delete blog');
  const id = request.params.id
  console.log(id);
  const result = await deleteBlog(id)
  response.json(result)
})