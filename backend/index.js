import express from 'express';
import path from 'path';
import configDB from './config/db.js';
import memoryRoute from './routes/memoryRoute.js';
import imageRoute from './routes/imageRoute.js';

const app = express();

configDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello backend');
});

app.use('/api/memories', memoryRoute);
app.use('/api/uploads', imageRoute);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/upload/images')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));