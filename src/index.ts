import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';
import { serveStatic } from 'hono/bun';
import { timing, startTime, endTime } from 'hono/timing';
import fs from 'node:fs/promises';
const app = new Hono();
app.use('*', timing());
app.use('*', prettyJSON());
app.use('/public/*', serveStatic({ root: './' }));
app.get('/', async (c) => {
  startTime(c, 'generate_pdf');
  c.header('Content-Type', 'application/pdf');
  const a = await new Promise((resolve, recjet) => {
    setTimeout(() => {
      resolve('nice');
    }, 3000);
  });
  const file = await fs.readFile('example.html');
  console.log(file);
  endTime(c, 'generate_pdf');
  return c.jsonT({
    bla: a,
  });
});

export default app;
