import express from 'express'
import configDB from './config/db.js'
import memoryRoute from './routes/memoryRoute.js'

const app = express();

configDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello backend');
});

app.use('/api/memories', memoryRoute);

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));