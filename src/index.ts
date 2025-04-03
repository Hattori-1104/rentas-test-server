import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/", async (c) => {
  console.log(`received data : ${await c.req.parseBody()}`)
})

export default app
