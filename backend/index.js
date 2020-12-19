import express from 'express';
import path from 'path';
import configDB from './config/db.js';
import memoryRoute from './routes/memoryRoute.js';
import imageRoute from './routes/imageRoute.js';

const app = express();

configDB();

app.use(express.json());


app.use('/api/memories', memoryRoute);
app.use('/api/uploads', imageRoute);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/upload/images')));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => {
        res.send('Hello backend');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));