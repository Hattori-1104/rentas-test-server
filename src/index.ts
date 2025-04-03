import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/", async (c) => {
  const data = await c.req.json()
  console.log("received data :\n", data)
  return c.json(data)
})

export default app
