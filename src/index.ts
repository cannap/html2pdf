import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';
import { serveStatic } from 'hono/bun';
import { timing, startTime, endTime } from 'hono/timing';
const app = new Hono();
app.use('*', timing());
app.use('*', prettyJSON());
app.use('/public/*', serveStatic({ root: './' }));
app.get('/', async (c) => {
  startTime(c, 'generate_pdf');

  endTime(c, 'generate_pdf');
  return c.jsonT({ ok: true });
});
console.log('wtf');
export default app;
