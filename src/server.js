import exppress from 'express';

const app = exppress();
const PORT = 3000;

app.get('/', (req, res) => {
  req.status(200).json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
