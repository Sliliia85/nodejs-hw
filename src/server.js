import exppress from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import pino from 'pino-http';


const app = exppress();
const PORT = process.env.PORT ?? 3000;

app.use(exppress.json());
app.use(cors());
app.use(helmet());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

app.post('/notes', (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: 'Note created' });
});

app.get('/notes', (req, res) => {
  res.status(200).json({ notes: [], message: 'Retrieved all notes' });
});
app.get('/notes/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ note: { id, title: 'Sample Note', content: 'This is a sample note.' }, message: 'Retrieved note with ID: ${id}' });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err);

  const isProd = process.env.NODE_ENV === "production";

  res.status(500).json({
    message: isProd
      ? "Something went wrong. Please try again later."
      : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
